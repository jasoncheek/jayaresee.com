import { useRouter } from 'next/router';
import GhostContentAPI from "@tryghost/content-api"

export default function Post(props) {
  const router = useRouter();
  function createMarkup() {
    return {__html: props.post.html};
  }
  return (
    <div>
      <h1>{router.query.slug}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

Post.getInitialProps = async (req) => {
  const api = new GhostContentAPI({
    url: 'http://167.71.251.241',
    key: '5b0c893a385565627d450f05ef',
    version: "v3"
  });
  let post; 
  const getPosts = async function() {
    return await api.posts
      .read({
        slug: req.query.slug 
      })
      .then((res)=>{
        post = res
      })
      .catch(err => {
        console.error(err);
      });
  }
  await getPosts();
  return {
    post: post
  }
}