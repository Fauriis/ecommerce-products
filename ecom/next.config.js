/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'fakestoreapi.com', 'api.storerestapi.com'],
  },
};

module.exports = nextConfig;
