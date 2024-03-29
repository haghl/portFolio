/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img1.daumcdn.net', 'www.notion.so', 's3.us-west-2.amazonaws.com', 'images.unsplash.com', 'haghl.dev', 's3-us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig
