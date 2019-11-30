import GhostContentAPI from "@tryghost/content-api"

export default async(req, res) => {
  /* Get posts from Ghost CMS at writing.jasoncheek.me */
  const api = new GhostContentAPI({
    url: 'http://167.71.251.241',
    key: '5b0c893a385565627d450f05ef',
    version: "v3"
  });
  const getPosts = async function() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }
  const posts = await getPosts();

//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
  res.json(JSON.stringify(posts))

}