import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
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

library.add(fab)

const Home = props => (
  <>
    <Head>
      <title>Jason Cheek</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Page>
      <Intro className="order-0"> <Header>
          <Vignette />
          <HeaderImage src="images/jason-cheek-photo.jpg" />
        </Header>
        <Welcome>
          <p className="f3 mt0 mb3">Hello. I'm Jason.</p>
          <p className="mv3 pr4 pr4-m pr0-l">I'm a designer &amp; developer based in <span className="b">New Orleans</span> with almost 9 years of experience building for the web.</p>
          <p className="mv3 pr3 f5">Currently, I'm working on UI and APIs for admin tools, e-commerce websites, and other things at Donovan Marine.</p>
        </Welcome>
      </Intro>
      <Links className="order-1">
        <LinksList>
          <LinksListItem>
            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{height: "1.5rem"}} />
          </LinksListItem>
          <LinksListItem>
            <FontAwesomeIcon icon={['fab', 'github']} style={{height: "1.5rem"}} />
          </LinksListItem>
          {/* <LinksListItem>
            <FontAwesomeIcon icon={['fab', 'codepen']} style={{height: "1.5rem"}} />
          </LinksListItem> */}
          <LinksListItem>
            <FontAwesomeIcon icon={['fab', 'facebook']} style={{height: "1.5rem"}} />
          </LinksListItem>
          <LinksListItem>
            <FontAwesomeIcon icon={['fab', 'instagram']} style={{height: "1.5rem"}} />
          </LinksListItem>
          <LinksListItem>
            <FontAwesomeIcon icon={['fab', 'twitter']} style={{height: "1.5rem"}} />
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
          {/* <Heading>Donovan Marine</Heading> */}
          <div className="mv1">Donovan Marine</div>
          <div className="mv1">Events Application<span className="white-50 pl2">2017-2019</span></div>
          <div className="mv1">UI, Auth, REST API</div>
        </ProjectHeader>
        <Project className="pointer">
          <Link href="/work">
            <ProjectWrap>
              {/* <ProjectTitle>Events Management Application</ProjectTitle> */}
              <ProjectList>
                <ProjectListItem>Registration</ProjectListItem>
                <ProjectListItem>Check In</ProjectListItem>
                <ProjectListItem>Ordering</ProjectListItem>
                <ProjectListItem>Stats</ProjectListItem>
                <ProjectListItem>API</ProjectListItem>
              </ProjectList>
            </ProjectWrap>
          </Link>
        </Project>    
      </Work>

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

      <Activity style={{color: "#e9e9e9"}} className="br3-l br--bottom-l br--right-l center-ns center-m center-none-l bg-black-70 white-50 br-l b--black-90 order-4 order-4-l pv5 ph4 ph5-ns w-100 w-40-l">
        <ActivityCaption>{props.tweet}</ActivityCaption>
        <ActivityInfo>Posted on Twitter</ActivityInfo>
        <ActivityTime>4 days ago</ActivityTime>
      </Activity>

      <div className="br3-l br--right-l br--bottom-l white-50 bt b--black-90 order-5 flex flex-row flex-column-l mw6 center-ns center-m center-none-l">
        <Activity className="bg-black-80 br bb-l b--black-90 w-50 w5-l pa3 pa4-l pr2">
          <ActivityImage src={props.ig_imageURL} />
          <ActivityInfo>Posted on Instagram</ActivityInfo>
          <ActivityTime>30 minutes ago</ActivityTime>
        </Activity>
        <Activity className="br3-ns br--right-m br--bottom-m br--right-l br--bottom-l bg-black-80 br b--black-90 w-50 w5-l pa3 pa4-l pb4 pl2 pt0-l">
          <ActivityImage src={props.spotify_data.items[0].track.album.images[0].url} />
          <ActivityInfo>Listened to on Spotify</ActivityInfo>
          <ActivityTime>2 days ago</ActivityTime>
        </Activity>
      </div>

    </Page>
  </>
)

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
  let ig_imageURL;

  await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${ig_access_token}&count=1`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ',
    },
  })
  .then(async (response) => {
    const ig_res = await response.json();
    ig_imageURL = ig_res.data[0].images.standard_resolution.url;
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
    tweet = tweet_data[0].text;
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
    ig_imageURL: ig_imageURL,
    tweet: tweet,
  };
};

export default Home
