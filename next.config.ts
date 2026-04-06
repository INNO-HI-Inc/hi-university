import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hi-university",
  images: { unoptimized: true },
};

export default nextConfig;
