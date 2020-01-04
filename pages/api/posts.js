import GhostContentAPI from "@tryghost/content-api"
export default async(req, res) => {
  const api = new GhostContentAPI({
    // url: 'https://writing.jasoncheek.me',
    // key: '110c8d1baabde7315705747482',
    url: process.env.NEXT_SERVER_BLOG_URL,
    key: process.env.NEXT_SERVER_BLOG_KEY,
    version: "v3"
  });
  const getPosts = async function() {
    return await api.posts
      .browse({
        limit: "all",
        include: "tags,authors"
      })
      .catch(err => {
        console.error(err);
      });
  }
  const posts = await getPosts();
  res.status(200).json(posts)
}