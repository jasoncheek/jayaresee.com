import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { formatDistanceToNow, fromUnixTime, formatISO, format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'tachyons'
import '../public/css/global.css'
//import postStyles from '../components/styled/postStyles.js'

library.add(fab, faTimes, faEnvelope, faArrowDown)
//{format(new Date(props.post.published_at), 'MMMM M, yyyy')}
// const toArrayWithKey = (obj, keyAs) => 
//   _values(_mapValues(obj, (value, key) => { 
//     value[keyAs] = key; 
//     return value; 
//   }));
// const postsGroupedArray = toArrayWithKey(props.postsGrouped, "group_published_at_month");
// const posts = postsGroupedArray.map(group => {
//   const postsGroupMonth = group[0].published_at_month;
//   const postsGroupYear = group[0].published_at_year;
//   const postsList = group.map(post => {
//       return (
//           <li key={post.id} className="list-item-title">
//             <Link href={`/writing/[slug]`} as={`/writing/${post.slug}`}>
//               <div>
//                 <a className="dib v-mid pv3 ph2 link mw5 mw-none-ns lh-copy mr2">{post.title}</a>
//                 <span className="dib courier light-silver f7 pr3 lh-copy">03/26/2020</span>
//               </div>
//             </Link>
//           </li>
//       )
//   });
//   return (
//     <div key={group.group_published_at_month} >
//       <h2 className="tr f7 gray normal b--silver bb pb1 center mv3">{postsGroupYear}</h2>
//       <ul className="list ph0 mt0 mb4 f5">
//         {postsList}
//       </ul>
//     </div>
//   )
// });
const Home = (props) => {

  const posts = props.posts.map((post) => {
    return (
      <li key={post.id} className="list-item-title">
        <Link href={`/writing/[slug]`} as={`/writing/${post.slug}`}>
          <div>
            <a className="dib v-mid pv3 ph2 link mw5 mw-none-ns lh-copy mr2">{post.title}</a>
            <span className="dib courier light-silver f7 pr3 lh-copy">{format(new Date(post.published_at), 'MMMM Mo')}</span>
          </div>
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
          <main id="site-main" className="site-main outer bg-white">
            <div className="inner">
              <div className="dib w-100">
                <div className="fl w-20 author-description pv2 ph3 f7 gray">
                  <span className="dn di-ns">Developer &amp; Musician</span>
                </div>
                <div className="fl w-60">
                  <div className="h1"></div>
                </div>
                <div className="fl tr w-20 author-location pv2 ph3 f7 gray">
                  New Orleans, Louisiana
                </div>
              </div>
              <div className="cf posts flex-ns pv4 center" style={{ maxWidth: "64rem" }}>
                <div className="flex-ns center w-100">
                  <div className="center w-two-thirds-ns bw2 b--dark-gray">
                    <ul className="list ph0 mt0 mb4 f4">
                      {posts}
                    </ul>
                  </div>
                </div>
                <div className="social-feeds flex flex-row flex-column-ns w-100 w5-ns">
                  {/* <div className="social-feeds-item b--black-10 dib v-top w-100 pa3 bg-near-white" style={{ marginRight: "-1px", maxWidth: "12rem" }}>
                    <a href={props.ig_post.link} className="link black-90 dim" target="_blank">
                      <img className="w-100 mb3 o-90" src={props.ig_post.images.standard_resolution.url} />
                    </a>
                    <div className="tl" style={{color: "#222"}}>
                      <div className="f7 pb1">Posted on Instagram</div>
                      <div className="f7">{formatDistanceToNow(fromUnixTime(props.ig_post.created_time))} ago</div>
                    </div>
                  </div> */}
                  {/* <div className="social-feeds-item b--black-10 dib v-top w-100 pa3 bg-near-white" style={{ maxWidth: "12rem" }}>
                    <a
                      href={props.spotify_data.items[0].track.external_urls.spotify ? props.spotify_data.items[0].track.external_urls.spotify : null}
                      className="link white-90 dim db"
                      target="_blank"
                    >
                      <img className="w-100 mb3 o-90" src={props.spotify_data.items[0].track.album.images[0].url} />
                    </a>
                    <div className="tl near-black" style={{color: "#222"}}>
                      <div className="pb1 f7">Played on Spotify</div>
                      <div className="f7">{formatDistanceToNow(new Date(props.spotify_data.items[0].played_at))} ago</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="more-posts dib w-100 tc">
                  <Link href={`/writing`}>
                    <a className="db f7 gray pv3 ph3 link" style={{fontWeight: "normal", color: "#777"}}>
                      View More Posts
                    </a>
                  </Link>
              </div>
            </div>
          </main>
          <div className="social-links tc bb b--gray">
            <ul className="list dib mv0 pl0 pv2">
              <li className="list-item dib v-mid">
                <a title="E-mail" className="dib v-mid link pv2 ph3" href="mailto:jrcheek@gmail.com" title="jrcheek@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} style={{ height: "1.25rem" }} />
                  {/* E-mail     */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a title="LinkedIn" className="dib v-mid link pv2 ph3" href="https://www.linkedin.com/in/jason-cheek/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ height: "1.25rem" }} />
                  {/* LinkedIn */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a title="GitHub" className="dib v-mid link pv2 ph3" href="https://github.com/jasoncheek" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github']} style={{ height: "1.25rem" }} />
                  {/* GitHub  */}
                </a>
              </li>
              {/* <lINKSlISTiTEM>
                    <fONTaWESOMEiCON ICON={['FAB', 'CODEPEN']} STYLE={{HEIGHT: "1.5REM"}} />
                    </lINKSlISTiTEM> */}
              <li className="list-item dib v-mid">
                <a title="facebook" className="dib v-mid link pv2 ph3" href="https://www.facebook.com/jasoncheeek" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'facebook']} style={{ height: "1.25rem" }} />
                  {/* facebook */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a title="instagram" className="dib v-mid link pv2 ph3" href="https://www.instagram.com/jasoncheek" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'instagram']} style={{ height: "1.25rem" }} />
                  {/* Instagram */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a title="twitter" className="dib v-mid link pv2 ph3" href="https://twitter.com/cheekisme" target="_blank">
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

Home.getInitialProps = async ({ req }) => {

  let serverDateTime = null;

  if (req) {
    serverDateTime = new Date();
  }

  const baseUrl = process.env.NEXT_SERVER_URL;

  const posts_res = await fetch(`${baseUrl}/api/posts`);
  const posts = await posts_res.json();

  // const ig_post_res = await fetch(`${baseUrl}/api/ig_post`);
  // const ig_post = await ig_post_res.json();

  // const spotify_data_res = await fetch(`${baseUrl}/api/spotify_data`);
  // const spotify_data = await spotify_data_res.json();

  const tweet_res = await fetch(`${baseUrl}/api/tweet`);
  const tweet = await tweet_res.json();

  return {
    // spotify_data: spotify_data,
    // ig_post: ig_post,
    tweet: tweet,
    posts: posts,
    year: serverDateTime.getFullYear()
  };
};

export default Home