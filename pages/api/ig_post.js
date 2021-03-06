import fetch from 'isomorphic-unfetch';
export default async(req, res) => {
  const ig_access_token = process.env.NEXT_SERVER_IG_ACCESS_TOKEN;
  const ig_res = await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${ig_access_token}&count=1`, {
    method: 'GET',
    headers: {
    'Authorization': 'Bearer ',
    },
  });
  const ig_resArray = await ig_res.json();
  const ig_post = ig_resArray.data[0];
  res.status(200).json(ig_post)
}

// module.exports = (req, res) => {
//   res.json({
//     body: req.body,
//     query: req.query,
//     cookies: req.cookies
//   })
// }