/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/post',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin',
        destination: '/admin/post',
        permanent: true,
      },
    ];
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl:
      process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  },
};
