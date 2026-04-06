import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/admission-consulting",
  images: { unoptimized: true },
};

export default nextConfig;
