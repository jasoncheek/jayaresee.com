import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
//import { Link } from 'next/link'
import GhostContentAPI from "@tryghost/content-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "tachyons";
import "../../public/css/global.css";
import postStyles from "../../components/styled/postStyles.js";
import { parse, format } from "date-fns";

library.add(fab, faTimes, faEnvelope);

export default function Post(props) {
  const router = useRouter();
  function createMarkup() {
    return { __html: props.post.html };
  }

  return (
    <div className="site sans-serif">
      <div className="site-wrapper relative">
        <header
          className="site-header relative bg-near-white"
          style={{ height: "3rem" }}
        >
          <div className="outer site-nav-main">
            <div className="inner">
              <nav className="site-nav bg-near-white">
                <a
                  className="site-nav-logo"
                  style={{
                    //background: "url(../images/jason-cheek-signature.png) no-repeat center",
                    background:
                      "url(https://s3.us-east-2.amazonaws.com/www.jayaresee.com/jayaresee-dark.svg) no-repeat center",
                    width: "200px",
                    backgroundSize: "contain",
                    textIndent: "-9999px",
                    margin: "2rem auto 0",
                    padding: "0",
                    height: "44px",
                    position: "absolute",
                    bottom: "-1.35rem",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    opacity: 0.85,
                  }}
                  href="/"
                >
                  JAY ARE SEE
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main outer bg-white">
          <div className="inner">
            <div className="dib w-100">
              <div className="fl w-20 author-description pv2 ph3 f7 gray lh-title">
                Seek, Grow, Share
              </div>
              <div className="fl w-60-ns">
                <div className="h1"></div>
              </div>
              <div className="fr fl-ns tl tr-ns w-20 author-location pv2 ph3-ns f7 gray lh-title">
                New Orleans, Louisiana
              </div>
            </div>
            <article className="post-full post center">
              <header
                className="post-full-header center pt5 pb4 ph3 tc"
                style={{ maxWidth: "40rem" }}
              >
                <section className="post-full-tags">
                  <a
                    href={
                      props.post.primary_tag !== undefined &&
                      props.post.primary_tag !== null
                        ? props.post.primary_tag.url
                        : null
                    }
                  >
                    {props.post.primary_tag !== undefined &&
                    props.post.primary_tag !== null
                      ? props.post.primary_tag.name
                      : null}
                  </a>
                </section>
                <h1 className="post-full-title f3 mt0 mb3">
                  {props.post.title}
                </h1>
                <div className="f7 gray">
                  {format(new Date(props.post.published_at), "MMMM M, yyyy")}
                </div>
              </header>
              {props.post.feature_image !== null ? (
                <figure
                  className="post-full-image w-100 ma0 center tc mb5"
                  style={{ maxWidth: "75rem" }}
                >
                  <img src={props.post.feature_image} alt={props.post.title} />
                  {/* <img srcSet={`${props.post.feature_image} 300w,
                                                ${props.post.feature_image} 600w,
                                                ${props.post.feature_image} 1000w,
                                                ${props.post.feature_image} 2000w" sizes="(max-width: 800px) 400px,
                                            (max-width: 1170px) 1170px,
                                                2000px" src="${props.post.feature_image}"`} alt={props.post.title} /> */}
                </figure>
              ) : null}
              <section className="post-full-content center">
                <div className="post-content">
                  {
                    <div
                      className="pb4 ph3 center lh-copy f4-ns system-serif"
                      style={{ maxWidth: "40rem" }}
                      dangerouslySetInnerHTML={createMarkup()}
                    ></div>
                  }
                </div>
              </section>
            </article>
            <div className="more-posts db center tc" style={{ width: "10rem" }}>
              <Link href={`/writing`}>
                <a
                  className="db f7 gray pv3 ph3 link"
                  style={{ fontWeight: "normal", color: "#777" }}
                >
                  View More Posts
                </a>
              </Link>
            </div>
          </div>
        </main>
        <div className="social-links tc bb b--gray">
          <ul className="list dib mv0 pl0 pv2">
            <li className="list-item dib v-mid">
              <a
                title="Instagram"
                className="dib v-mid link pv2 ph3"
                href="https://www.instagram.com/jayareseemusic"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  style={{ height: "1.25rem" }}
                />
                {/* Instagram */}
              </a>
            </li>
            <li className="list-item dib v-mid">
              <a
                title="Twitter"
                className="dib v-mid link pv2 ph3"
                href="https://twitter.com/jayareseemusic"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  style={{ height: "1.25rem" }}
                />
                {/* Twitter */}
              </a>
            </li>
            <li className="list-item dib v-mid">
              <a
                title="Tumblr"
                className="dib v-mid link pv2 ph3"
                href="https://jayaresee.tumblr.com"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "tumblr"]}
                  style={{ height: "1.25rem" }}
                />
                {/* Twitter */}
              </a>
            </li>
            <li className="list-item dib v-mid">
              <a
                title="Soundcloud"
                className="dib v-mid link pv2 ph3"
                href="https://soundcloud.com/jayareseemusic"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "soundcloud"]}
                  style={{ height: "1.25rem" }}
                />
              </a>
            </li>
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
    version: "v3",
  });
  let post;
  const getPosts = async function () {
    return await api.posts.read({
      slug: req.query.slug,
    });
  };
  const posts = await getPosts()
    .then((res) => {
      post = res;
      //console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  let serverDateTime = null;
  if (req) {
    serverDateTime = new Date();
  }
  return {
    post: post,
    year: serverDateTime.getFullYear(),
  };
};
