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
        {console.log(props.post)}
      <div className="post-template tag-getting-started">
        <div className="site-wrapper">
            <header className="site-header">
                <div className="outer site-nav-main">
                    <div className="inner">
                        <nav className="site-nav">
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
                                    bottom: "-2.25rem",
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


            <main id="site-main" className="site-main outer">
            <div className="inner">

                <article className="post-full post">

                    <header className="post-full-header">

                        <section className="post-full-tags">
                            <a href={`/tag/getting-started`}>{props.post.primary_tag !== undefined ? props.post.primary_tag.name : null}</a>
                        </section>
                        <h1 className="post-full-title">{props.post.title}</h1>

                        <p className="post-full-custom-excerpt">{props.post.excerpt}</p>

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
                        <figure className="post-full-image">
                            <img src={props.post.feature_image} alt={props.post.title} />
                            {/* <img srcSet={`${props.post.feature_image} 300w,
                                        ${props.post.feature_image} 600w,
                                        ${props.post.feature_image} 1000w,
                                        ${props.post.feature_image} 2000w" sizes="(max-width: 800px) 400px,
                                    (max-width: 1170px) 1170px,
                                        2000px" src="${props.post.feature_image}"`} alt={props.post.title} /> */}
                        </figure> : null
                    }
                    <section className="post-full-content">
                        <div className="post-content">
                            {<div dangerouslySetInnerHTML={createMarkup()}></div>}
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