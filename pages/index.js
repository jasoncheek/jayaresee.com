import React, { useState } from 'react'
import Head from 'next/head'
// import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'tachyons'
import '../public/css/global.css'
import {
    Page,
    Intro,
    Header, 
    Vignette,
    HeaderImage,
    Welcome,
    Work,
    Heading, 
    Project, 
    ProjectWrap, 
    ProjectHeader,
    ProjectTitle,
    ProjectList, 
    ProjectListItem, 
    Activity,
    ActivityCaption,
    ActivityImage,
    ActivityInfo,
    ActivityTime,
    Posts,
    PostsHeader,
    PostsHeading,
    PostsList,
    PostsListItem,
    PostsListItemTitle,
    Links,
    LinksList,
    LinksListItem
} from '../components/styled/page.js'

library.add(fab, faTimes)

const Home = (props) => {
  const [workOverlay, setWorkOverlay] = useState(false);
  return (
    <>
      <Head>
        <title>Jason Cheek</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Page>
        <Intro className="order-0"> 
          <Header>
            <Vignette />
            <HeaderImage src="images/jason-cheek-photo.jpg" />
            <div className="center ba b--gray" style={{width: "10rem", height: "10rem", background: "url(images/jason-cheek.jpg)", backgroundSize: "contain"}}>

            </div>
          </Header>
          <Welcome>
            <p className="f3 mt0 mb3">Hey, I'm Jason.</p>
            <p className="mv3 pr4 pr4-m pr0-l">I'm a designer &amp; developer based in <span className="b">New Orleans</span> with 9 years professional experience building for the web.</p>
            <p className="mv3 pr3 f5">Currently, I'm working on UIs and APIs for admin tools, e-commerce websites, and other things at <a href="https://donovanmarine.com" style={{color: "#32322e"}} className="link b bb dim" target="_blank" title="Donovan Marine">Donovan Marine</a>.</p>
          </Welcome>
        </Intro>
        <Links className="order-1">
          <LinksList>
            <LinksListItem>
              <a title="LinkedIn" className="white-90 dim" href="https://www.linkedin.com/in/jason-cheek/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{height: "1.5rem"}} /></a>
            </LinksListItem>
            <LinksListItem>
              <a title="GitHub" className="white-90 dim" href="https://github.com/jasoncheek" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} style={{height: "1.5rem"}} /></a>
            </LinksListItem>
            {/* <LinksListItem>
              <FontAwesomeIcon icon={['fab', 'codepen']} style={{height: "1.5rem"}} />
            </LinksListItem> */}
            <LinksListItem>
              <a title="Facebook" className="white-90 dim" href="https://www.facebook.com/jasoncheeek" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} style={{height: "1.5rem"}} /></a>
            </LinksListItem>
            <LinksListItem>
              <a title="Instagram" className="white-90 dim" href="https://www.instagram.com/jasoncheek" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} style={{height: "1.5rem"}} /></a>
            </LinksListItem>
            <LinksListItem>
              <a title="Twitter" className="white-90 dim" href="https://twitter.com/cheekisme" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} style={{height: "1.5rem"}} /></a>
            </LinksListItem>
            {/* <LinksListItem>
              <FontAwesomeIcon icon={['fab', 'tumblr']} style={{height: "1.5rem"}} />
            </LinksListItem>
            <LinksListItem>
              <FontAwesomeIcon icon={['fab', 'pinterest']} style={{height: "1.5rem"}} />
            </LinksListItem>
            <LinksListItem>
              <FontAwesomeIcon icon={['fab', 'soundcloud']} style={{height: "1.5rem"}} />
            </LinksListItem> */}
          </LinksList>
        </Links>
        <Work className="order-1 order-2-l">
          <ProjectHeader>
            <div className="fl">
              <div className="mv1">Donovan Marine</div>
              <div className="mv1">Events Application</div>
            </div>
            <div className="fr tr white-50 ">
              <div className="mv1">UI, Auth, REST API</div>
              <div className="mv1">2017-2019</div>
            </div>
          </ProjectHeader>
          <Project className="pointer" onClick={()=>{setWorkOverlay(true);window.scrollTo(0, 0);}}>
            <ProjectWrap>
              <img className="fl" src="images/work.jpg" alt="Work" title="Work" />
              {/* <ProjectTitle>Events Management Application</ProjectTitle> */}
              <ProjectList>
                <ProjectListItem>Registration</ProjectListItem>
                <ProjectListItem>Check In</ProjectListItem>
                <ProjectListItem>Ordering</ProjectListItem>
                <ProjectListItem>Stats</ProjectListItem>
                <ProjectListItem>API</ProjectListItem>
              </ProjectList>
            </ProjectWrap>
          </Project>    
        </Work>

        {workOverlay ? 

          <div style={{background: "#333"}} className="absolute z-1 left-0 top-0 w-100 h-100">
            <div style={{maxWidth: "64rem"}} className="sans-serif center w-100 pb4 white-80 bg-black-20">
            <ProjectHeader className="bg-white-10 white-80 mb2">
              <div className="fl">
                <div className="mv1">Donovan Marine</div>
                <div className="mv1">Events Application</div>
              </div>

              <div className="fr white-80">
                <div className="pointer tc pt1" onClick={()=>{setWorkOverlay(false)}}>
                  <FontAwesomeIcon icon={faTimes} style={{height: "1.25rem"}} />
                  <div className="b" style={{marginTop: "-.125rem"}}>close</div>
                </div>
              </div>
              <div className="fr tr white-50 mr3 mr4-l">
                <div className="mv1">UI, Auth, REST API</div>
                <div className="mv1">2017-2019</div>
              </div>
            </ProjectHeader>

            <div className="pb4 bb b--white-10">
              <div className="fl f4 ph4 white-90 pt4 pb3">Event Registration</div>
              <div className="fr-l lh-title f6 ph4 pt4 pb3 tr">Design, HTML, CSS, Javascript</div>
              <div className="cl overflow-hidden">
                <img className="mw-none mw-100-l" src="images/registration.jpg" alt="Event Registration" title="Event Registration" />
              </div>
            </div>
            <div className="pb4 bb b--white-10">
              <div className="fl f4 ph4 white-90 pt4 pb3">Events Admin</div>
              <div className="fr-l lh-title f6 ph4 pt4 pb3 tr">Design, HTML, CSS, Javascript, React</div>
              <div className="cl overflow-hidden">
                <img className="mw-none mw-100-l" src="images/admin.jpg" alt="Event Admin" title="Event Admin" />
              </div>
            </div>
            <div className="pb4 bb b--white-10">
              <div className="fl f4 ph4 white-90 pt4 pb3">Events Data API</div>
              <div className="fr-l lh-title f6 ph4 pt4 pb3 tr">C#, SQL, REST, JSON</div>
              <div className="cl overflow-x-auto">
                <img className="mw-none mw-100-l" src="images/api.jpg" alt="Event Data API" title="Events Data API" />
              </div>
            </div>
              <div className="white-80 pointer pa2 b mv3 tc ba db center w3 br1 bg-animate hover-bg-white-80 hover-black-90 " onClick={()=>{setWorkOverlay(false)}}>close</div>
            </div>
          </div>          

        : null}

        {/* <Posts className="order-3 order-4-l">
          <PostsHeader>
            <PostsHeading>Writing</PostsHeading>
          </PostsHeader>
          <PostsList>
            <PostsListItem>
              <PostsListItemTitle>
                CSS Grid for ya mamma
              </PostsListItemTitle>
            </PostsListItem>
            <PostsListItem>
                <PostsListItemTitle>
                  Inline styles is a habit
                </PostsListItemTitle>
            </PostsListItem>
            <PostsListItem>
                <PostsListItemTitle>
                  Filters in SVG and beyond
                </PostsListItemTitle>
            </PostsListItem>
          </PostsList>
        </Posts> */}

        <Activity style={{color: "#e9e9e9"}} className="center-ns center-m center-none-l bg-white-10 white-50 b--black-90 order-4 order-4-l pv5 ph4 ph5-ns w-100 w-40-l">
          <ActivityCaption><a href="https://twitter.com/cheekisme" className="link white-90" target="_blank">{props.tweet.text}</a></ActivityCaption>
          <ActivityInfo>Posted on Twitter</ActivityInfo>
          <ActivityTime>{moment(props.tweet.created_at).fromNow()}</ActivityTime>
        </Activity>

        <div className="br2-l br--right-l br--bottom-l white-50 bt b--black-90 order-5 flex flex-row flex-column-l mw6 center-ns center-m center-none-l">
          <Activity className="bg-black-80 br bb-l b--white-10 w-50 w5-l pa3 pa4-l pr2">
            <a href={props.ig_post.link} className="link white-90 dim" target="_blank"><ActivityImage src={props.ig_post.images.standard_resolution.url} /></a>
            <ActivityInfo>Posted on Instagram</ActivityInfo>
            <ActivityTime>{moment.unix(props.ig_post.created_time).fromNow()}</ActivityTime>
          </Activity>
          <Activity className="br2-ns br--right-m br--bottom-m br--right-l br--bottom-l br bg-black-80 b--white-10 w-50 w5-l pa3 pa4-l pb4 pl2">
            <a href={props.spotify_data.items[0].context.external_urls.spotify} className="link white-90 dim" target="_blank"><ActivityImage src={props.spotify_data.items[0].track.album.images[0].url} /></a>
            <ActivityInfo>Listened to on Spotify</ActivityInfo>
            <ActivityTime>{moment(props.spotify_data.items[0].played_at).fromNow()}</ActivityTime>
          </Activity>
        </div>

      </Page>
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
  /* Instagram */
  const ig_access_token = process.env.NEXT_SERVER_IG_ACCESS_TOKEN;
  let ig_post;

  await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${ig_access_token}&count=1`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ',
    },
  })
  .then(async (response) => {
    const ig_res = await response.json();
    ig_post = ig_res.data[0];
  })

/* Twitter */
  const twitter_access_token = process.env.NEXT_SERVER_TWITTER_ACCESS_TOKEN;
  let tweet;

  await fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cheekisme&count=1', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${twitter_access_token}`
    },
  })
  .then(async (data) => {
    const tweet_data = await data.json();
    tweet = tweet_data[0];
  });

/* Spotify */
  const spotify_client_id = process.env.NEXT_SERVER_SPOTIFY_CLIENT_ID;
  const spotify_client_secret = process.env.NEXT_SERVER_SPOTIFY_CLIENT_SECRET;
  const spotify_refresh_token = process.env.NEXT_SERVER_SPOTIFY_REFRESH_TOKEN;
  let spotify_data = {}; 
  
  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=refresh_token&refresh_token=${spotify_refresh_token}&client_id=${spotify_client_id}&client_secret=${spotify_client_secret}`
  })
  .then(async (response) => {
    const spotify_res = await response.json();
    await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${spotify_res.access_token}`
      },
    })
    .then(async (data) => {
      spotify_data = await data.json();
    });
  })

  return {
    spotify_data: spotify_data,
    ig_post: ig_post,
    tweet: tweet,
  };
};

export default Home
