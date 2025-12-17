import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cc",
  assetPrefix: "/cc",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
