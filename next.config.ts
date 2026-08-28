import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // GitHub Pages project site; omit in `next dev` so localhost:3000 works
  ...(isProd ? { basePath: "/primis-ai-bots" } : {}),
};

export default nextConfig;
