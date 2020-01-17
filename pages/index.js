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
//import postStyles from '../components/styled/postStyles.js'

library.add(fab, faTimes, faEnvelope)

const Home = (props) => {
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
      <div className="site sans-serif">
        <div className="site-wrapper">
            <header className="site-header relative bg-near-white" style={{height: "3rem"}}>
                <div className="outer site-nav-main">
                    <div className="inner">
                        <nav className="site-nav bg-near-white">
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
                                    bottom: "-1.35rem",
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
                    <div className="pv2 ph3 f7 gray fr">
                        New Orleans, LA
                    </div>
                    <div className="pv2 ph3 f7 gray">
                        Developer<span className="dn di-ns">&nbsp;&amp; Musician</span>
                    </div>
                    <div className="flex-ns center pv4 pv5-ns" style={{maxWidth: "40rem"}}>
                        <div className="w-75-ns pr4-ns">
                            <ul className="list ph0 mt0 mb4 f4">
                                <li className="list-item-title">
                                    <div>
                                        <Link href={`/writing/[slug]`} as={`/writing/${props.posts[0].slug}`}>
                                            <a className="db pv3 ph4 link near-black">{props.posts[0].title}</a>
                                        </Link>
                                    </div>
                                </li>
                                <li className="list-item-title">
                                    <div>
                                        <Link href={`/writing/[slug]`} as={`/writing/${props.posts[1].slug}`}>
                                            <a className="db pv3 ph4 link near-black">{props.posts[1].title}</a>
                                        </Link>
                                    </div>
                                </li>
                                <li className="list-item-title">
                                    <div>
                                        <Link href={`/writing/[slug]`} as={`/writing/${props.posts[2].slug}`}>
                                            <a className="db pv3 ph4 link near-black">{props.posts[2].title}</a>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <div className="order-1 bg-near-white tc">
                                <ul className="list mv0 pl0">
                                    <li className="dib pa2 mr3">
                                        <a title="E-mail" className="black-70 dim" href="mailto:jrcheek@gmail.com" title="jrcheek@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{height: "1.35rem"}} /></a>
                                    </li>
                                    <li className="dib pa2 mr3">
                                        <a title="LinkedIn" className="black-70 dim" href="https://www.linkedin.com/in/jason-cheek/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{height: "1.35rem"}} /></a>
                                    </li>
                                    <li className="dib pa2 mr3">
                                        <a title="GitHub" className="black-70 dim" href="https://github.com/jasoncheek" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} style={{height: "1.35rem"}} /></a>
                                    </li>
                                    {/* <lINKSlISTiTEM>
                                    <fONTaWESOMEiCON ICON={['FAB', 'CODEPEN']} STYLE={{HEIGHT: "1.5REM"}} />
                                    </lINKSlISTiTEM> */}
                                    <li className="dib pa2 mr3">
                                        <a title="facebook" className="black-70 dim" href="https://www.facebook.com/jasoncheeek" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} style={{height: "1.35rem"}} /></a>
                                    </li>
                                    <li className="dib pa2 mr3">
                                        <a title="instagram" className="black-70 dim" href="https://www.instagram.com/jasoncheek" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} style={{height: "1.35rem"}} /></a>
                                    </li>
                                    <li className="dib pa2 mr3">
                                        <a title="twitter" className="black-70 dim" href="https://twitter.com/cheekisme" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} style={{height: "1.35rem"}} /></a>
                                    </li>
                                    {/* <lINKSlISTiTEM>
                                    <fONTaWESOMEiCON ICON={['FAB', 'TUMBLR']} STYLE={{HEIGHT: "1.5REM"}} />
                                    </lINKSlISTiTEM>
                                    <lINKSlISTiTEM>
                                    <fONTaWESOMEiCON ICON={['FAB', 'PINTEREST']} STYLE={{HEIGHT: "1.5REM"}} />
                                    </lINKSlISTiTEM>
                                    <lINKSlISTiTEM>
                                    <fONTaWESOMEiCON ICON={['FAB', 'SOUNDCLOUD']} STYLE={{HEIGHT: "1.5REM"}} />
                                    </lINKSlISTiTEM> */}
                                </ul>
                            </div>
                        </div>
                        <div className="w-25-ns flex flex-column-ns mw6 center-ns">
                            <div className="bg-near-white bb-ns b--black-10 w-50 w-100-ns pa3">
                                <a href={props.ig_post.link} className="link black-90 dim" target="_blank">
                                    <img className="w-100 mb3 o-90" src={props.ig_post.images.standard_resolution.url} />
                                </a>
                                <div className="f7 pb1 gray">Posted on Instagram</div>
                                <div className="f7 gray">{formatDistanceToNow(fromUnixTime(props.ig_post.created_time))} ago</div>
                            </div>
                            <div className="bg-near-white w-50 w-100-ns b--black-10 pa3">
                                <a 
                                    href={props.spotify_data.items[0].track.external_urls.spotify ? props.spotify_data.items[0].track.external_urls.spotify : null} 
                                    className="link white-90 dim db" 
                                    target="_blank"
                                >
                                    <img className="w-100 mb3 o-90" src={props.spotify_data.items[0].track.album.images[0].url} />
                                </a>
                                <div className="pb1 f7 black-50">Listened on Spotify</div>
                                <div className="f7 black-50">{formatDistanceToNow(new Date(props.spotify_data.items[0].played_at))} ago</div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div> 
      {/* <style jsx global>
          {postStyles}
      </style> */}
    
      </div>
    </>
  ) 
}

Home.getInitialProps = async () => {
  const baseUrl = process.env.NEXT_SERVER_URL;

  const posts_res = await fetch(`${baseUrl}/api/posts`); 
  const posts = await posts_res.json();

  const ig_post_res = await fetch(`${baseUrl}/api/ig_post`);
  const ig_post = await ig_post_res.json();

  const spotify_data_res = await fetch(`${baseUrl}/api/spotify_data`);
  const spotify_data = await spotify_data_res.json();

  const tweet_res = await fetch(`${baseUrl}/api/tweet`);
  const tweet = await tweet_res.json();

  return {
    spotify_data: spotify_data,
    ig_post: ig_post,
    tweet: tweet,
    posts: posts
  };
};

export default Home