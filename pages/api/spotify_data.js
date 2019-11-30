import fetch from 'isomorphic-unfetch';
export default async(req, res) => {
  /* Spotify */
  const spotify_client_id = process.env.NEXT_SERVER_SPOTIFY_CLIENT_ID;
  const spotify_client_secret = process.env.NEXT_SERVER_SPOTIFY_CLIENT_SECRET;
  const spotify_refresh_token = process.env.NEXT_SERVER_SPOTIFY_REFRESH_TOKEN;
  
  const spotify_resToken = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=refresh_token&refresh_token=${spotify_refresh_token}&client_id=${spotify_client_id}&client_secret=${spotify_client_secret}`
  });

  const spotify_resTokenData = await spotify_resToken.json();
  const spotify_res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${spotify_resTokenData.access_token}`
    },
  });
  const spotify_data = await spotify_res.json();

  // res.setHeader('Content-Type', 'application/json')
  // res.statusCode = 200
  //res.json(JSON.stringify(spotify_data))
  res.status(200).json(spotify_data)
}