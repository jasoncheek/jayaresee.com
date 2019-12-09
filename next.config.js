const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const nextCSS = require('@zeit/next-css')
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();
 
const nextConfig = {
  env: {
      NEXT_SERVER_IG_ACCESS_TOKEN: process.env.NEXT_SERVER_IG_ACCESS_TOKEN,
      NEXT_SERVER_TWITTER_ACCESS_TOKEN: process.env.NEXT_SERVER_TWITTER_ACCESS_TOKEN,
      NEXT_SERVER_SPOTIFY_CLIENT_ID: process.env.NEXT_SERVER_SPOTIFY_CLIENT_ID,
      NEXT_SERVER_SPOTIFY_CLIENT_SECRET: process.env.NEXT_SERVER_SPOTIFY_CLIENT_SECRET,
      NEXT_SERVER_SPOTIFY_REFRESH_TOKEN: process.env.NEXT_SERVER_SPOTIFY_REFRESH_TOKEN,
      NEXT_SERVER_URL: process.env.NEXT_SERVER_URL,
      NEXT_SERVER_BLOG_URL: process.env.NEXT_SERVER_BLOG_URL,
      NEXT_SERVER_BLOG_KEY: process.env.NEXT_SERVER_BLOG_KEY,
  }
};

module.exports = withPlugins([
  nextEnv(),
  nextCSS()
], nextConfig);