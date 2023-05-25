/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "www.mypremierpain.com"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
