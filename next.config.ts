import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/dml',
  basePath: '/dml',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
