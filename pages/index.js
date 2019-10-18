import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import 'tachyons'
import {
    Page,
    Intro,
    Header, 
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

const Home = props => (
  <>
    <Head>
      <title>Jason Cheek</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Page>
      <Intro className="order-0"> 
        <Header>
          <HeaderImage src="" />
        </Header>
        <Welcome>
          Welcome. My name is Jason Cheek. I design and build web applications in New Orleans, LA. This is my website. It has work, photos, words, and music.
        </Welcome>
      </Intro>

      <Work className="order-1">
        <ProjectHeader>
          <Heading>Recent Work</Heading>
        </ProjectHeader>
        <Project>
          <ProjectWrap>
            <ProjectTitle>Events Management Application</ProjectTitle>
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

      <Activity className="order-2">
        <ActivityImage src={props.ig_imageURL} />
        <ActivityInfo>Posted on Instagram</ActivityInfo>
        <ActivityTime>30 minutes ago</ActivityTime>
      </Activity>


      <Posts className="order-3">
        <PostsHeader>
          <PostsHeading>Writing</PostsHeading>
        </PostsHeader>
        <PostsList>
          <PostsListItem className="bg-washed-blue">
            <PostsListItemTitle>
              CSS Grid for ya mamma and them
            </PostsListItemTitle>
          </PostsListItem>
          <PostsListItem className="bg-washed-red">
              <PostsListItemTitle>
                Inline styles is a habit
              </PostsListItemTitle>
          </PostsListItem>
          <PostsListItem className="bg-washed-yellow">
              <PostsListItemTitle>
                Filters in SVG and beyond
              </PostsListItemTitle>
          </PostsListItem>
        </PostsList>
      </Posts>

      <Activity className="order-4 order-5-l bg-near-white">
        <ActivityCaption>{props.tweet}</ActivityCaption>
        <ActivityInfo>Posted on Twitter</ActivityInfo>
        <ActivityTime>4 days ago</ActivityTime>
      </Activity>

      <Activity className="order-5 order-4-l">
        <ActivityImage src={props.spotify_data.items[0].track.album.images[0].url} />
        <ActivityInfo>Listened to on Spotify</ActivityInfo>
        <ActivityTime>2 days ago</ActivityTime>
      </Activity>

      <Links className="order-6 bg-near-white">
        <LinksList>
          <LinksListItem>Linked In</LinksListItem>
          <LinksListItem>GitHub</LinksListItem>
          <LinksListItem>Facebook</LinksListItem>
          <LinksListItem>CodePen</LinksListItem>
          <LinksListItem>Tumblr</LinksListItem>
          <LinksListItem>Pinterest</LinksListItem>
          <LinksListItem>SoundCloud</LinksListItem>
        </LinksList>
      </Links>

    </Page>
  </>
)

Home.getInitialProps = async function() {

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
