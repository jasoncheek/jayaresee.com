import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { formatDistanceToNow, fromUnixTime, formatISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "tachyons";
import "../../public/css/global.css";
import {
  groupBy as _groupBy,
  values as _values,
  mapValues as _mapValues,
} from "lodash";
import format from "date-fns/format";
import getMonth from "date-fns/getMonth";
//import postStyles from '../components/styled/postStyles.js'

library.add(fab, faTimes, faEnvelope);

const Writing = (props) => {
  console.log(props.postsGrouped);

  const [selectedTags, setSelectedTags] = useState();
  const tagsList = props.tags.map((tag) => {
    return (
      <li
        className="tag mh1 pa2 f7 ba bw1 dib br3 pointer"
        title={tag.name}
        key={tag.id}
      >
        {tag.name}
      </li>
    );
  });

  const toArrayWithKey = (obj, keyAs) =>
    _values(
      _mapValues(obj, (value, key) => {
        value[keyAs] = key;
        return value;
      })
    );
  const postsGroupedArray = toArrayWithKey(
    props.posts,
    "group_published_at_month"
  );
  const posts = postsGroupedArray.map((group) => {
    const postsGroupYear = group[0].published_at_year;
    const postsList = group.map((post) => {
      return (
        <li key={post.id} className="list-item-title w-100 w-50-ns mh3">
          <Link href={`/writing/[slug]`} as={`/writing/${post.slug}`}>
            <div>
              <a className="fl v-mid pv3 link mw5 mw-none-ns lh-copy mr2">
                {post.title}
              </a>
              <span className="fr pv3 mt1 courier light-silver f7 lh-copy">
                {format(new Date(post.published_at), "MMMM Mo")}
              </span>
            </div>
          </Link>
        </li>
      );
    });

    return (
      <div key={group.group_published_at_month}>
        <h2 className="tr f7 gray normal b--silver bb pr3 pb1 center mv0">
          {postsGroupYear}
        </h2>
        <ul className="list ph0 mt0 mb4 f5">{postsList}</ul>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Jason Cheek</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-44641857-3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-44641857-3');
          `,
          }}
        />
      </Head>
      <div className="site sans-serif">
        <div className="site-wrapper">
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
                      height: "48px",
                      position: "absolute",
                      bottom: "-1.5rem",
                      left: "0",
                      right: "0",
                      margin: "auto",
                    }}
                    href="/"
                  >
                    JAY ARE SEE
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main id="site-main" className="writing site-main outer bg-white">
            <div className="inner">
              <div className="dib w-100">
                <div className="fl w-20 author-description pv2 ph3 f7 gray lh-title">
                  Alter Ego
                </div>
                <div className="fl w-60-ns">
                  <div className="h1"></div>
                </div>
                <div className="fr fl-ns tl tr-ns w-20 author-location pv2 ph3-ns f7 gray lh-title">
                  New Orleans, Louisiana
                </div>
              </div>
              <div className="tags-wrap tc mt4">
                {props.tags.length > 0 ? (
                  <ul className="tags dib list mv0 pl0">{tagsList}</ul>
                ) : null}
              </div>
            </div>
            <div
              className="posts flex-ns pv4 center"
              style={{ maxWidth: "48rem" }}
            >
              <div className="flex-ns center w-100">
                <div className="w-100 bw2 b--dark-gray">{posts}</div>
              </div>
            </div>
          </main>
          <div className="social-links tc bb b--gray">
            <ul className="list dib mv0 pl0 pv2">
              <li className="list-item dib v-mid">
                <a
                  title="E-mail"
                  className="dib v-mid link pv2 ph3"
                  href="mailto:jrcheek@gmail.com"
                  title="jrcheek@gmail.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ height: "1.25rem" }}
                  />
                  {/* E-mail     */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a
                  title="LinkedIn"
                  className="dib v-mid link pv2 ph3"
                  href="https://www.linkedin.com/in/jason-cheek/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    style={{ height: "1.25rem" }}
                  />
                  {/* LinkedIn */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a
                  title="GitHub"
                  className="dib v-mid link pv2 ph3"
                  href="https://github.com/jasoncheek"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    style={{ height: "1.25rem" }}
                  />
                  {/* GitHub  */}
                </a>
              </li>
              {/* <lINKSlISTiTEM>
                    <fONTaWESOMEiCON ICON={['FAB', 'CODEPEN']} STYLE={{HEIGHT: "1.5REM"}} />
                    </lINKSlISTiTEM> */}
              <li className="list-item dib v-mid">
                <a
                  title="facebook"
                  className="dib v-mid link pv2 ph3"
                  href="https://www.facebook.com/jasoncheeek"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    style={{ height: "1.25rem" }}
                  />
                  {/* facebook */}
                </a>
              </li>
              <li className="list-item dib v-mid">
                <a
                  title="instagram"
                  className="dib v-mid link pv2 ph3"
                  href="https://www.instagram.com/jasoncheek"
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
                  title="twitter"
                  className="dib v-mid link pv2 ph3"
                  href="https://twitter.com/cheekisme"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    style={{ height: "1.25rem" }}
                  />
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
  );
};

Writing.getInitialProps = async ({ req }) => {
  let serverDateTime = null;

  if (req) {
    serverDateTime = new Date();
  } else {
    serverDateTime = new Date();
  }

  const baseUrl = process.env.NEXT_SERVER_URL;

  const posts_res = await fetch(`${baseUrl}/api/posts`);
  const posts = await posts_res.json();
  const postsUpdated = posts.map((post) => {
    post.published_at_formatted = format(
      new Date(post.published_at),
      "MM/dd/yyyy"
    );
    const date = new Date(post.published_at); // 2009-11-10
    const year = new Date(post.published_at).getFullYear(); // 2009-11-10
    const month = date.toLocaleString("default", { month: "long" });
    post.published_at_month = month;
    post.published_at_year = year;
    return post;
  });
  const postsGrouped = _groupBy(postsUpdated, "published_at_month");

  // const ig_post_res = await fetch(`${baseUrl}/api/ig_post`);
  // const ig_post = await ig_post_res.json();

  // const spotify_data_res = await fetch(`${baseUrl}/api/spotify_data`);
  // const spotify_data = await spotify_data_res.json();

  // const tweet_res = await fetch(`${baseUrl}/api/tweet`);
  // const tweet = await tweet_res.json();

  const tags_res = await fetch(`${baseUrl}/api/tags`);
  const tags = await tags_res.json();

  return {
    // spotify_data: spotify_data,
    // ig_post: ig_post,
    // tweet: tweet,
    posts: postsGrouped,
    year: serverDateTime.getFullYear(),
    tags: tags,
  };
};

export default Writing;
