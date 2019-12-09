import fetch from 'isomorphic-unfetch';
export default async(req, res) => {
  const twitter_access_token = process.env.NEXT_SERVER_TWITTER_ACCESS_TOKEN;
  const tweet_res = await fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cheekisme&count=1', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${twitter_access_token}`
    },
  });
  const tweet_data = await tweet_res.json();
  const tweet = tweet_data[0];
  res.status(200).json(tweet)
}