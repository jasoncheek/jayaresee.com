import React from 'react'
import Head from 'next/head'
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

library.add(fab, faTimes, faEnvelope)

export default function Post(props) {
  const router = useRouter();
  function createMarkup() {
    return {__html: props.post.html};
  }

  return (
        <div className="site sans-serif">
            <div className="site-wrapper relative">

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
                <main id="site-main" className="site-main outer bg-white">
                    <div className="inner">
                        <div className="pv2 ph3 f7 gray fr">
                            New Orleans, LA
                        </div>
                        <div className="pv2 ph3 f7 gray">
                            Developer<span className="dn di-ns">&nbsp;&amp; Musician</span>
                        </div>
                        <article className="post-full post center">
                            <header className="post-full-header center pv5 ph3" style={{maxWidth: "40rem"}}>

                                <section className="post-full-tags">
                                    <a href={`/tag/getting-started`}>{props.post.primary_tag !== undefined && props.post.primary_tag !== null ? props.post.primary_tag.name : null}</a>
                                </section>
                                <h1 className="post-full-title f3 f2-ns mt0 mb5">{props.post.title}</h1>
                                <div className="f6 b near-black">2/10/2020</div>

                                <p className="post-full-custom-excerpt f4 mb3 serif lh-copy gray">{props.post.excerpt}</p>

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
                                <figure className="post-full-image w-100 ma0 center tc" style={{maxWidth: "75rem"}}>
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
                                    {<div className="pv5 ph3 center lh-copy f4-ns serif" style={{maxWidth: "40rem"}} dangerouslySetInnerHTML={createMarkup()}></div>}
                                </div>
                            </section>
                        </article>
                    </div>
                </main>
                <div className="tc">
                    <ul className="social-links list mv0 pl0 pv2 bb b--gray">
                        <li className="dib v-mid pv2 ph3">
                            <a title="E-mail" className="link" href="mailto:jrcheek@gmail.com" title="jrcheek@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} style={{height: "1.25rem"}} />
                                {/* E-mail     */}
                            </a>
                        </li>
                        <li className="dib v-mid pv2 ph3">
                            <a title="LinkedIn" className="link" href="https://www.linkedin.com/in/jason-cheek/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} style={{height: "1.25rem"}} />
                                {/* LinkedIn */}
                            </a>
                        </li>
                        <li className="dib v-mid pv2 ph3">
                            <a title="GitHub" className="link" href="https://github.com/jasoncheek" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'github']} style={{height: "1.25rem"}} />
                                {/* GitHub  */}
                            </a>
                        </li>
                        {/* <lINKSlISTiTEM>
                        <fONTaWESOMEiCON ICON={['FAB', 'CODEPEN']} STYLE={{HEIGHT: "1.5REM"}} />
                        </lINKSlISTiTEM> */}
                        <li className="dib v-mid pv2 ph3">
                            <a title="facebook" className="link" href="https://www.facebook.com/jasoncheeek" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'facebook']} style={{height: "1.25rem"}} />
                                {/* facebook */}
                            </a>
                        </li>
                        <li className="dib v-mid pv2 ph3">
                            <a title="instagram" className="link" href="https://www.instagram.com/jasoncheek" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'instagram']} style={{height: "1.25rem"}} />
                                {/* Instagram */}
                            </a>
                        </li>
                        <li className="dib v-mid pv2 ph3">
                            <a title="twitter" className="link" href="https://twitter.com/cheekisme" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'twitter']} style={{height: "1.25rem"}} />
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