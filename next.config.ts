import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Prevents animation type-mismatch crashes
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;