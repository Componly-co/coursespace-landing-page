/** @type {import('next').NextConfig} */

const withComponly = require('@componly/nextjs-plugin').default;

const nextConfig = {
  reactStrictMode: true,
    async headers() {
    return [
      {
        // Set CORS headers
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Origin, X-Requested-With, Content-Type, Accept',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
}

module.exports = withComponly(nextConfig); 
