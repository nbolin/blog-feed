import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'varian.widen.net',
      },

    ],
  },
};

export default nextConfig;
