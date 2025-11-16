import type { NextConfig } from "next";
import { REDIRECT_PATHS } from "./constants/PATH";

const nextConfig: NextConfig = {
  redirects: async () => REDIRECT_PATHS,
  reactStrictMode: true,
};

export default nextConfig;
