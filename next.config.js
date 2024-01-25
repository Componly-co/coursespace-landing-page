/** @type {import('next').NextConfig} */

const withComponly = require('@componly/nextjs-plugin').default;

const nextConfig = {
  reactStrictMode: true
}

module.exports = withComponly(nextConfig); 
