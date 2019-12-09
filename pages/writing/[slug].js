import { useRouter } from 'next/router'
//import { Link } from 'next/link'
import GhostContentAPI from "@tryghost/content-api"
import postStyles from '../../components/styled/postStyles.js'

export default function Post(props) {
  const router = useRouter();
  function createMarkup() {
    return {__html: props.post.html};
  }
  return (
    <div className="post">
      <div className="post-template tag-getting-started">
        <div className="site-wrapper">
            <header className="site-header">
                <div className="outer site-nav-main">
                    <div className="inner">
                        <nav className="site-nav">
                    <div className="site-nav-left">
                        <a className="site-nav-logo" href="http://167.71.251.241">
                            {/* <img src="https://static.ghost.org/v1.0.0/images/ghost-logo.svg" alt="Jason Cheek" /> */}
                            Jason Cheek
                        </a>
                        <div className="site-nav-content">
                                <ul className="nav" role="menu">
                                    <li className="nav-home" role="menuitem"><a href="http://167.71.251.241/">Home</a></li>
                                    <li className="nav-tag" role="menuitem"><a href="http://167.71.251.241/tag/getting-started/">Tag</a></li>
                                    <li className="nav-author" role="menuitem"><a href="http://167.71.251.241/author/ghost/">Author</a></li>
                                    <li className="nav-help" role="menuitem"><a href="https://ghost.org/docs/">Help</a></li>
                                    </ul>

                                <span className="nav-post-title ">Welcome to Ghost</span>
                        </div>
                    </div>
                    <div className="site-nav-right">
                        <div className="social-links">
                                <a className="social-link social-link-fb" href="https://www.facebook.com/ghost" title="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.204 4.911h-3.546c-2.103 0-4.443.885-4.443 3.934.01 1.062 0 2.08 0 3.225h-2.433v3.872h2.509v11.147h4.61v-11.22h3.042l.275-3.81h-3.397s.007-1.695 0-2.187c0-1.205 1.253-1.136 1.329-1.136h2.054V4.911z"></path></svg></a>
                                <a className="social-link social-link-tw" href="https://twitter.com/tryghost" title="Twitter" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                    </a>
                    </div>
                            <a className="rss-button" href="https://feedly.com/i/subscription/feed/http://167.71.251.241/rss/" title="RSS" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path></svg>
                    </a>
                </div>
                </nav>
                </div>
                </div>
            </header>


            <main id="site-main" className="site-main outer">
            <div className="inner">

                <article className="post-full post tag-getting-started ">

                    <header className="post-full-header">

                        <section className="post-full-tags">
                            <a href="/tag/getting-started/">Getting Started</a>
                        </section>

                        <h1 className="post-full-title">Welcome to Ghost</h1>

                        <p className="post-full-custom-excerpt">Welcome, it's great to have you here.
            We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.</p>

                        <div className="post-full-byline">

                            <section className="post-full-byline-content">

                                <ul className="author-list">
                                    <li className="author-list-item">

                                        <div className="author-card">
                                            <img className="author-profile-image" src="https://static.ghost.org/v3.0.0/images/ghost.png" alt="Ghost" />
                                            <div className="author-info">
                                                <div className="bio">
                                                    <h2>Ghost</h2>
                                                    <p>You can delete this user to remove all the welcome posts</p>
                                                    <p><a href="/author/ghost/">More posts</a> by Ghost.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <a href="/author/ghost/" className="author-avatar">
                                            <img className="author-profile-image" src="https://static.ghost.org/v3.0.0/images/ghost.png" alt="Ghost" />
                                        </a>

                                    </li>
                                </ul>

                                <section className="post-full-byline-meta">
                                    <h4 className="author-name"><a href="/author/ghost/">Ghost</a></h4>
                                    <div className="byline-meta-content">
                                        <time className="byline-meta-date" dateTime="2019-11-16">16 Nov 2019</time>
                                        <span className="byline-reading-time"><span className="bull">•</span> 1 min read</span>
                                    </div>
                                </section>

                            </section>


                        </div>
                    </header>

                    <figure className="post-full-image">
                        <img srcSet="https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png 300w,
                                    https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png 600w,
                                    https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png 1000w,
                                    https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png 2000w" sizes="(max-width: 800px) 400px,
                                (max-width: 1170px) 1170px,
                                    2000px" src="https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png" alt="Welcome to Ghost" />
                    </figure>

                    <section className="post-full-content">
                        <div className="post-content">
                            <h2 id="a-few-things-you-should-know"><strong>A few things you should know</strong></h2><ol><li>Ghost is designed for ambitious, professional publishers who want to actively build a business around their content. That's who it works best for. </li><li>The entire platform can be modified and customised to suit your needs. It's very powerful, but does require some knowledge of code. Ghost is not necessarily a good platform for beginners or people who just want a simple personal blog. </li><li>It's possible to work with all your favourite tools and apps with hundreds of <a href="https://ghost.org/integrations/">integrations</a> to speed up your workflows, connect email lists, build communities and much more.</li></ol><h2 id="behind-the-scenes">Behind the scenes</h2><p>Ghost is made by an independent non-profit organisation called the Ghost Foundation. We are 100% self funded by revenue from our <a href="https://ghost.org/pricing">Ghost(Pro)</a> service, and every penny we make is re-invested into funding further development of free, open source technology for modern publishing.</p><p>The version of Ghost you are looking at right now would not have been made possible without generous contributions from the open source <a href="https://github.com/TryGhost">community</a>.</p><h2 id="next-up-the-editor">Next up, the editor</h2><p>The main thing you'll want to read about next is probably: <a href="http://167.71.251.241/the-editor/">the Ghost editor</a>. This is where the good stuff happens.</p><blockquote>By the way, once you're done reading, you can simply delete the default Ghost user from your team to remove all of these introductory posts! </blockquote>
                        </div>
                    </section>



                </article>

            </div>
            </main>

            <div className="inner">
                <div className="read-next-feed">
                        <article className="read-next-card">
                            <header className="read-next-card-header">
                                <h3><span>More in</span> <a href="/tag/getting-started/">Getting Started</a></h3>
                            </header>
                            <div className="read-next-card-content">
                                <ul>
                                    <li>
                                        <h4><a href="/the-editor/">Writing posts with Ghost ✍️</a></h4>
                                        <div className="read-next-card-meta">
                                            <p><time dateTime="2019-11-16">16 Nov 2019</time> –
                                               3 min read</p>
                                        </div>
                                    </li>
                                    <li>
                                        <h4><a href="/publishing-options/">Publishing options</a></h4>
                                        <div className="read-next-card-meta">
                                            <p><time dateTime="2019-11-16">16 Nov 2019</time> –
                                                2 min read</p>
                                        </div>
                                    </li>
                                    <li>
                                        <h4><a href="/admin-settings/">Managing admin settings</a></h4>
                                        <div className="read-next-card-meta">
                                            <p><time dateTime="2019-11-16">16 Nov 2019</time> –
                                                2 min read</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <footer className="read-next-card-footer">
                                <a href="/tag/getting-started/">See all 6 posts
                                    →</a>
                            </footer>
                        </article>


                        <article className="post-card post tag-getting-started ">

            <a className="post-card-image-link" href="/the-editor/">
                <img className="post-card-image" srcSet="https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png 300w,
                            https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png 600w,
                            https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png 1000w,
                            https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png 2000w" sizes="(max-width: 1000px) 400px, 700px" src="https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png" alt="Writing posts with Ghost ✍️" />
            </a>

            <div className="post-card-content">

                <a className="post-card-content-link" href="/the-editor/">

                    <header className="post-card-header">
                            <div className="post-card-primary-tag">Getting Started</div>
                        <h2 className="post-card-title">Writing posts with Ghost ✍️</h2>
                    </header>

                    <section className="post-card-excerpt">
                            <p>Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.</p>
                    </section>

                </a>

                <footer className="post-card-meta">
                    <ul className="author-list">
                        <li className="author-list-item">
                    
                            <div className="author-name-tooltip">
                                Ghost
                            </div>
                    
                            <a href="/author/ghost/" className="static-avatar">
                                <img className="author-profile-image" src="https://static.ghost.org/v3.0.0/images/ghost.png" alt="Ghost" />
                            </a>
                        </li>
                    </ul>
                    <div className="post-card-byline-content">
                        <span><a href="/author/ghost/">Ghost</a></span>
                        <span className="post-card-byline-date"><time dateTime="2019-11-16">16 Nov 2019</time> <span className="bull">•</span> 3 min read</span>
                    </div>
                </footer>

            </div>

            </article>
        </div>
        </div>
    
        </div>
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
  const getPosts = async function() {
    return await api.posts
      .read({
        slug: req.query.slug 
      })
  }
  const posts = await getPosts()
      .then((res)=>{
        post = res;
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  ;
  return {
    post: post
  }
}