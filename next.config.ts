import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['cdn.10minuteschool.com', 'i.ytimg.com', 's3.ap-southeast-1.amazonaws.com'],
  },
};

export default nextConfig;
