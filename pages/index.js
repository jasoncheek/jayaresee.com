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

library.add(fab, faTimes, faEnvelope)

const Home = (props) => {
  const [workOverlay, setWorkOverlay] = useState(false);
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
      <Page>
        <Intro className="order-0"> 
          <Header>
            <Vignette />
            <HeaderImage src="images/jason-cheek-photo-bw.jpg" />
            {/* <div className="center ba b--gray" style={{width: "10rem", height: "10rem", background: "url(images/jason-cheek.jpg)", backgroundSize: "contain"}}>

            </div> */}
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
              <a title="E-mail" className="white-90 dim" href="mailto:jrcheek@gmail.com" title="jrcheek@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{height: "1.5rem"}} /></a>
            </LinksListItem>
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
          <ProjectTitle>Recent Work</ProjectTitle>
          <Project className="pointer" onClick={()=>{setWorkOverlay(true);window.scrollTo(0, 0);}}>
            <ProjectHeader className="absolute">
              <div className="fl">
                <div className="mv1">Donovan Marine</div>
                <div className="mv1">Events Application</div>
              </div>
              <div className="fr tr">
                <div className="mv1">UI, Auth, REST API</div>
                <div className="mv1">2017-2019</div>
              </div>
            </ProjectHeader>
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
            <ProjectTitle className="bg-black-80 white-90">Recent Work</ProjectTitle>
            <div style={{maxWidth: "64rem"}} className="sans-serif center w-100 pb4 white-80 bg-black-20">
            <ProjectHeader className={"bg-white-10 white-80 mb2"}>
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
              <div className="cl overflow-hidden">
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
            <PostsListItem className="bg-light-blue">
              <PostsListItemTitle>
                <Link href={`/writing/[slug]`} as={`/writing/${props.posts[0].slug}`}>
                  <a className="db pv3 ph4 link near-black">{props.posts[0].title}</a>
                </Link>
              </PostsListItemTitle>
            </PostsListItem>
            <PostsListItem className="bg-light-green">
              <PostsListItemTitle>
                <Link href={`/writing/[slug]`} as={`/writing/${props.posts[1].slug}`}>
                  <a className="db pv3 ph4 link near-black">{props.posts[1].title}</a>
                </Link>
              </PostsListItemTitle>
            </PostsListItem>
            <PostsListItem className="bg-light-red">
              <PostsListItemTitle>
                <Link href={`/writing/[slug]`} as={`/writing/${props.posts[2].slug}`}>
                  <a className="db pv3 ph4 link near-black">{props.posts[2].title}</a>
                </Link>
              </PostsListItemTitle>
            </PostsListItem>
          </PostsList>
        </Posts> */}

        <Activity className="center-ns center-m center-none-l bg-white-40 black-70 b--black-90 order-4 order-4-l pv5 ph4 ph5-ns w-100 w-40-l">
          <ActivityCaption><a href="https://twitter.com/cheekisme" className="link black-80" target="_blank">{props.tweet.text}</a></ActivityCaption>
          <ActivityInfo>Posted on Twitter</ActivityInfo>
          <ActivityTime>{formatDistanceToNow(new Date(props.tweet.created_at))} ago</ActivityTime>
        </Activity>

        <div className="br2-l br--right-l br--bottom-l white-50 bt b--black-90 order-5 flex flex-row flex-column-l mw6 center-ns center-m center-none-l">
          <Activity className="bg-black-80 br bb-l b--white-10 w-50 w5-l pa3 pa4-l pr2">
            <a href={props.ig_post.link} className="link white-90 dim" target="_blank"><ActivityImage src={props.ig_post.images.standard_resolution.url} /></a>
            <ActivityInfo>Posted on Instagram</ActivityInfo>
            <ActivityTime>{formatDistanceToNow(fromUnixTime(props.ig_post.created_time))} ago</ActivityTime> 
          </Activity>
          <Activity className="br2-ns br--right-m br--bottom-m br--right-l br--bottom-l br bg-black-80 b--white-10 w-50 w5-l pa3 pa4-l pb4 pl2">
            <a href={props.spotify_data.items[0].track.external_urls.spotify ? props.spotify_data.items[0].track.external_urls.spotify : null } className="link white-90 dim" target="_blank"><ActivityImage src={props.spotify_data.items[0].track.album.images[0].url} /></a>
            <ActivityInfo>Listened to on Spotify</ActivityInfo>
            <ActivityTime>{formatDistanceToNow(new Date(props.spotify_data.items[0].played_at))} ago</ActivityTime>
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
  const baseUrl = process.env.NEXT_SERVER_URL;
  const posts_res = await fetch(`${baseUrl}/api/posts`); 
  const posts = await posts_res.json()
  const ig_post_res = await fetch(`${baseUrl}/api/ig_post`);
  const ig_post = await ig_post_res.json()
  const spotify_data_res = await fetch(`${baseUrl}/api/spotify_data`);
  const spotify_data = await spotify_data_res.json()
  const tweet_res = await fetch(`${baseUrl}/api/tweet`);
  const tweet = await tweet_res.json()

  return {
    spotify_data: spotify_data,
    ig_post: ig_post,
    tweet: tweet,
    posts: posts
  };
};

export default Home