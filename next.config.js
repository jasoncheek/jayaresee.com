const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const nextCSS = require('@zeit/next-css')
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();
 
const nextConfig = {
  // Your Next.js config.
};
 
module.exports = withPlugins([
  nextEnv(),
  nextCSS()
], nextConfig);