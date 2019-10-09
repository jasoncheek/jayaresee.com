import React from 'react'
import 'tachyons'
// import Head from 'next/head'
// import Nav from '../components/nav'

const Home = () => (
  <div className="sans-serif">
    {/* <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav /> */}

    <p className="Intro">
      Welcome. My name is Jason Cheek. I design and build web applications in New Orleans, Louisiana. This is my website. It has work, photos, words, and music.
    </p>

    <h2 className="Heading f3">Recent Work</h2>

    <div className="Project">
      <h3 className="Project-title">Events Management Application</h3>
      <ul className="">
        <li className="">Registration</li>
        <li className="">Check In</li>
        <li className="">Ordering</li>
        <li className="">Stats</li>
        <li className="">API</li>
      </ul>
    </div>    

    <div className="Image">
      <img src="" alt="" className="" style={{display: "block", width: "100px", height: "100px", border: "1px solid"}}/>
      <div className="">Posted on Instagram</div>
      <div className="">30 minutes ago</div>
    </div>

    <h4 className="Heading f3">Writing</h4>

    <article className="Post">
      <ul className="">
        <li className="">
          CSS Grid for ya mamma and them
        </li>
        <li className="">
          Inline styles is a habit
        </li>
        <li className="">
          Filters in SVG and beyond
        </li>
      </ul>
    </article>    

    <div className="Tweet">
      <p className="">I’m starting to think I could do this every day and get used to it.</p>
      <div className="">Posted on Twitter</div>
      <div className="">4 days ago</div>
    </div>

    <div className="Activity">
      <img src="" alt="" className="" style={{display: "block", width: "100px", height: "100px", border: "1px solid"}} />
      <div className="">Listened to on Spotify</div>
      <div className="">2 days ago</div>
    </div>

    <div className="Links">
      <ul className="">
        <li className="">Linked In</li>
        <li className="">GitHub</li>
        <li className="">Facebook</li>
        <li className="">CodePen</li>
        <li className="">Tumblr</li>
        <li className="">Pinterest</li>
        <li className="">SoundCloud</li>
      </ul>
    </div>

  </div>
)

export default Home
