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
import '../../public/css/global.css'
//import postStyles from '../components/styled/postStyles.js'

library.add(fab, faTimes, faEnvelope)

const Writing = (props) => {

  const [selectedTags, setSelectedTags] = useState();

  const tagsList = props.tags.map(tag => {
    return <li className="mh1 pa2 f7 ba bw1 dib br3 pointer" title={tag.name} key={tag.id}>{tag.name}</li>
  });

  const postsList = props.posts.map(post => {
      return (
        <li className="list-item-title">
          <Link href={`/writing/[slug]`} as={`/writing/${post.slug}`}>
            <a className="db pv3 ph3 link">{post.title}</a>
          </Link>
        </li>
      )
  });

  return (
    <>
      <Head>
        <title>Jason Cheek</title>
        <link rel='icon' href='/favicon.ico' />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-44641857-3"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-44641857-3');
          `}}
        />
      </Head>
      <div className="site sans-serif">
        <div className="site-wrapper">
          <header className="site-header relative bg-near-white" style={{ height: "3rem" }}>
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
          <main id="site-main" className="writing site-main outer bg-white">
            <div className="inner">
              <div className="author-location pv2 ph3 f7 gray fr">
                New Orleans, LA
                    </div>
              <div className="author-description pv2 ph3 f7 gray">
                Developer<span className="dn di-ns">&nbsp;&amp; Musician</span>
              </div>
              <div className="tags tc mt4">
                  {props.tags.length > 0 ? 
                    <ul className="list mv0 pl0">
                      {tagsList}
                    </ul>
                    : null
                  }
                </div>
              </div>
              <div className="posts flex-ns pv4 center" style={{ maxWidth: "64rem" }}>
                <div className="flex-ns center w-100">


                  <div className="w-100 bw2 b--dark-gray">

                    <ul className="list ph0 mt0 mb4 f5">
                      {postsList}
                    </ul>
                  </div>
                </div>
            </div>
          </main>
          <div className="social-links tc">
            <ul className="list mv0 pl0 pv2 bb b--gray">
              <li className="dib v-mid pv2 ph3">
                <a title="E-mail" className="link" href="mailto:jrcheek@gmail.com" title="jrcheek@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} style={{ height: "1.25rem" }} />
                  {/* E-mail     */}
                </a>
              </li>
              <li className="dib v-mid pv2 ph3">
                <a title="LinkedIn" className="link" href="https://www.linkedin.com/in/jason-cheek/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ height: "1.25rem" }} />
                  {/* LinkedIn */}
                </a>
              </li>
              <li className="dib v-mid pv2 ph3">
                <a title="GitHub" className="link" href="https://github.com/jasoncheek" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github']} style={{ height: "1.25rem" }} />
                  {/* GitHub  */}
                </a>
              </li>
              {/* <lINKSlISTiTEM>
                    <fONTaWESOMEiCON ICON={['FAB', 'CODEPEN']} STYLE={{HEIGHT: "1.5REM"}} />
                    </lINKSlISTiTEM> */}
              <li className="dib v-mid pv2 ph3">
                <a title="facebook" className="link" href="https://www.facebook.com/jasoncheeek" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'facebook']} style={{ height: "1.25rem" }} />
                  {/* facebook */}
                </a>
              </li>
              <li className="dib v-mid pv2 ph3">
                <a title="instagram" className="link" href="https://www.instagram.com/jasoncheek" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'instagram']} style={{ height: "1.25rem" }} />
                  {/* Instagram */}
                </a>
              </li>
              <li className="dib v-mid pv2 ph3">
                <a title="twitter" className="link" href="https://twitter.com/cheekisme" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'twitter']} style={{ height: "1.25rem" }} />
                  {/* Twitter */}
                </a>
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
          <footer className="gray tc f7 pt2 pb5">
            &copy; {props.year} Jason Cheek
            </footer>
        </div>
        {/* <style jsx global>
          {postStyles}
      </style> */}

      </div>
    </>
  )
}

Writing.getInitialProps = async ({ req }) => {

  let serverDateTime = null;

  if (req) {
    serverDateTime = new Date();
  }
  else {
    serverDateTime = new Date();
  }

  const baseUrl = process.env.NEXT_SERVER_URL;

  const posts_res = await fetch(`${baseUrl}/api/posts`);
  const posts = await posts_res.json();

  const ig_post_res = await fetch(`${baseUrl}/api/ig_post`);
  const ig_post = await ig_post_res.json();

  const spotify_data_res = await fetch(`${baseUrl}/api/spotify_data`);
  const spotify_data = await spotify_data_res.json();

  const tweet_res = await fetch(`${baseUrl}/api/tweet`);
  const tweet = await tweet_res.json();

  const tags_res = await fetch(`${baseUrl}/api/tags`);
  const tags = await tags_res.json();
  
  return {
    spotify_data: spotify_data,
    ig_post: ig_post,
    tweet: tweet,
    posts: posts,
    year: serverDateTime.getFullYear(),
    tags: tags
  };
};

export default Writing