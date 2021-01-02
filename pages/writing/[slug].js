import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'
//import { Link } from 'next/link'
import GhostContentAPI from "@tryghost/content-api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'tachyons'
import '../../public/css/global.css'
import postStyles from '../../components/styled/postStyles.js'
import { parse, format } from 'date-fns'

library.add(fab, faTimes, faEnvelope)

export default function Post(props) {
  const router = useRouter();
  function createMarkup() {
    return {__html: props.post.html};
  }

  return (
    <div className="site sans-serif">
      <div className="site-wrapper relative">
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
              <div className="fl w-20 author-description pv2 ph3 f7 gray lh-title">
                Music &amp; Code
              </div>
              <div className="fl w-60-ns">
                <div className="h1"></div>
              </div>
              <div className="fr fl-ns tl tr-ns w-20 author-location pv2 ph3-ns f7 gray lh-title">
                New Orleans, Louisiana
              </div>
            </div>
            <article className="post-full post center">
              <header className="post-full-header center pv4 ph3 tc" style={{ maxWidth: "40rem" }}>
                <section className="post-full-tags">
                  <a href={`/tag/getting-started`}>{props.post.primary_tag !== undefined && props.post.primary_tag !== null ? props.post.primary_tag.name : null}</a>
                </section>
                <h1 className="post-full-title f3 f2-ns mt0 mb3">{props.post.title}</h1>
                {/* <div className="f5 gray mb5">{format(parse(props.post.published_at, 'MM/dd/yyyy', new Date()), 'MM/dd/yyyy')}</div> */}
                <div className="f7 mb4 gray">{format(new Date(props.post.published_at), 'MMMM M, yyyy')}</div>

                <p className="post-full-custom-excerpt f4 mb3 system-serif lh-copy gray tl">{props.post.excerpt}</p>

                <div className="post-full-byline">

                  {props.post.primary_author !== null && props.post.primary_author !== undefined ?
                    <section className="post-full-byline-content">

                      <ul className="author-list">
                        <li className="author-list-item">

                          <div className="author-card">
                            <img className="author-profile-image" src={props.post.primary_author.profile_image} alt={props.post.primary_author.name} />
                            <div className="author-info">
                              <div className="bio">
                                <h2>{props.post.primary_author.name}</h2>
                                <p>{props.post.primary_author.bio}</p>
                                <p><a href={`/author/${props.post.primary_author.slug}/`}>More posts</a> by {props.post.primary_author.name}.</p>
                              </div>
                            </div>
                          </div>

                          <a href={`/author/${props.post.primary_author.slug}/`} className="author-avatar">
                            <img className="author-profile-image" src={props.post.primary_author.profile_image} alt={props.post.primary_author.name} />
                          </a>

                        </li>
                      </ul>
                      <section className="post-full-byline-meta">
                        <h4 className="author-name"><a href={`/author/${props.post.primary_author.slug}/`}>{props.post.primary_author.name}</a></h4>
                        <div className="byline-meta-content">
                          <time className="byline-meta-date" dateTime={props.post.published_at}>{props.post.published_at}</time>
                          <span className="byline-reading-time"><span className="bull">•</span> {props.post.reading_time} min read</span>
                        </div>
                      </section>
                    </section> : null
                  }
                </div>
              </header>
              {props.post.feature_image !== null ?
                <figure className="post-full-image w-100 ma0 center tc" style={{ maxWidth: "75rem" }}>
                  <img src={props.post.feature_image} alt={props.post.title} />
                  {/* <img srcSet={`${props.post.feature_image} 300w,
                                                ${props.post.feature_image} 600w,
                                                ${props.post.feature_image} 1000w,
                                                ${props.post.feature_image} 2000w" sizes="(max-width: 800px) 400px,
                                            (max-width: 1170px) 1170px,
                                                2000px" src="${props.post.feature_image}"`} alt={props.post.title} /> */}
                </figure> : null
              }
              <section className="post-full-content center">
                <div className="post-content">
                  {<div className="pv4 ph3 center lh-copy f4-ns system-serif" style={{ maxWidth: "40rem" }} dangerouslySetInnerHTML={createMarkup()}></div>}
                </div>
              </section>
            </article>
            <div className="more-posts db center tc" style={{width: "10rem"}}>
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

      <style jsx global>
        {postStyles}
      </style>
    </div>
  );
}

Post.getInitialProps = async (req) => {
  const api = new GhostContentAPI({
    url: process.env.NEXT_SERVER_BLOG_URL,
    key: process.env.NEXT_SERVER_BLOG_KEY,
    version: "v3"
  });
  let post;
  const getPosts = async function () {
    return await api.posts
      .read({
        slug: req.query.slug
      })
  }
  const posts = await getPosts()
    .then((res) => {
      post = res;
      //console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
  ;
  let serverDateTime = null;
  if (req) {
    serverDateTime = new Date();
  }
  return {
    post: post,
    year: serverDateTime.getFullYear()
  }
}