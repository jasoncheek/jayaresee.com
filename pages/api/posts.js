import GhostContentAPI from "@tryghost/content-api";
import { format } from "date-fns/format";
export default async (req, res) => {
  const api = new GhostContentAPI({
    url: process.env.NEXT_SERVER_BLOG_URL,
    key: process.env.NEXT_SERVER_BLOG_KEY,
    version: "v3",
  });
  const getPosts = async function () {
    return await api.posts
      .browse({
        limit: "all",
        include: "tags,authors",
        order: "published_at DESC",
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const posts = await getPosts();

  res.status(200).json(posts);
};
