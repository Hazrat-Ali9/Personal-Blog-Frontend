import type { NextConfig } from "next";
// Ts config 
const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Match all routes
        headers: [
          {
            key: "Cache-Control",
            value: "no-store", // Disable Caching Globally
          },
        ],
      },
    ];
  },
};

export default nextConfig;