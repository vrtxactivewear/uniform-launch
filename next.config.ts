import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/uniform-launch",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
