import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { formatDistanceToNow, fromUnixTime, formatISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'tachyons'
import '../public/css/global.css'
import postStyles from '../components/styled/postStyles.js'
import {
    Activity,
    ActivityCaption,
    ActivityImage,
    ActivityInfo,
    ActivityTime,
} from '../components/styled/pageStyles.js'

library.add(fab, faTimes, faEnvelope)

const Home = (props) => {
  const [workOverlay, setWorkOverlay] = useState(false);
  function createMarkup() {
    return {__html: props.post.html};
  }
  return (
    <>
      <Head>
        <title>Jason Cheek</title>
        <link rel='icon' href='/favicon.ico' />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-44641857-3"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-44641857-3');
          `}}
        />
      </Head>
      <div className="site">
        <div className="site-wrapper">
            <header className="site-header">
                <div className="outer site-nav-main">
                    <div className="inner">
                        <nav className="site-nav">
                            <a 
                                className="site-nav-logo" 
                                style={{
                                    background: "url(../images/jason-cheek-signature.png) no-repeat center", 
                                    width: "200px", 
                                    backgroundSize: "contain",
                                    textIndent: "-9999px",
                                    margin: "2rem auto 0",
                                    padding: "0",
                                    height: "52px",
                                    position: "absolute",
                                    bottom: "-2.25rem",
                                    left: "0",
                                    right: "0",
                                    margin: "auto",
                                }} 
                                href="/"
                            >
                                {/* <img src="https://static.ghost.org/v1.0.0/images/ghost-logo.svg" alt="Jason Cheek" />  */}
                                Jason Cheek
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
            <main id="site-main" className="site-main outer">
            <div className="inner">
              <article className="post-full post">
                <header className="post-full-header">
                    <ul className="list">
                      <li>
                        <div>
                          <Link href={`/writing/[slug]`} as={`/writing/${props.posts[0].slug}`}>
                            <a className="db pv3 ph4 link near-black">{props.posts[0].title}</a>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div>
                          <Link href={`/writing/[slug]`} as={`/writing/${props.posts[1].slug}`}>
                            <a className="db pv3 ph4 link near-black">{props.posts[1].title}</a>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div>
                          <Link href={`/writing/[slug]`} as={`/writing/${props.posts[2].slug}`}>
                            <a className="db pv3 ph4 link near-black">{props.posts[2].title}</a>
                          </Link>
                        </div>
                      </li>
                    </ul>
        <Activity className="center-ns center-m center-none-l bg-white-40 black-70 b--black-90 order-4 order-4-l pv5 ph4 ph5-ns w-100 w-40-l">
          <ActivityCaption><a href="https://twitter.com/cheekisme" className="link black-80" target="_blank">{props.tweet.text}</a></ActivityCaption>
          <ActivityInfo>Posted on Twitter</ActivityInfo>
          <ActivityTime>{formatDistanceToNow(new Date(props.tweet.created_at))} ago</ActivityTime>
        </Activity>

        <div className="br2-l br--right-l br--bottom-l white-50 bt b--black-90 order-5 flex flex-row flex-column-l mw6 center-ns center-m center-none-l">
          <Activity className="bg-black-80 br bb-l b--white-10 w-50 w5-l pa3 pa4-l pr2">
            <a href={props.ig_post.link} className="link white-90 dim" target="_blank"><ActivityImage src={props.ig_post.images.standard_resolution.url} /></a>
            <ActivityInfo>Posted on Instagram</ActivityInfo>
            <ActivityTime>{formatDistanceToNow(fromUnixTime(props.ig_post.created_time))} ago</ActivityTime> 
          </Activity>
          <Activity className="br2-ns br--right-m br--bottom-m br--right-l br--bottom-l br bg-black-80 b--white-10 w-50 w5-l pa3 pa4-l pb4 pl2">
            <a href={props.spotify_data.items[0].track.external_urls.spotify ? props.spotify_data.items[0].track.external_urls.spotify : null } className="link white-90 dim" target="_blank"><ActivityImage src={props.spotify_data.items[0].track.album.images[0].url} /></a>
            <ActivityInfo>Listened to on Spotify</ActivityInfo>
            <ActivityTime>{formatDistanceToNow(new Date(props.spotify_data.items[0].played_at))} ago</ActivityTime>
          </Activity>
        </div>

                </header>
              </article>
            </div>

            </main>
        </div> 
      <style jsx global>
          {postStyles}
      </style>
    
      </div>
    </>
  ) 
}

Home.getInitialProps = async ({req}) => {
  // if (req) {
  //   const posts = await API.getPosts()
  //   return {posts}
  // } else {
  //   API.getPosts().then( posts => this.setState({posts}) )
  //   return {}
  // }
  const baseUrl = process.env.NEXT_SERVER_URL;
  const posts_res = await fetch(`${baseUrl}/api/posts`); 
  const posts = await posts_res.json()
  const ig_post_res = await fetch(`${baseUrl}/api/ig_post`);
  const ig_post = await ig_post_res.json()
  const spotify_data_res = await fetch(`${baseUrl}/api/spotify_data`);
  const spotify_data = await spotify_data_res.json()
  const tweet_res = await fetch(`${baseUrl}/api/tweet`);
  const tweet = await tweet_res.json()

  return {
    spotify_data: spotify_data,
    ig_post: ig_post,
    tweet: tweet,
    posts: posts
  };
};

export default Home