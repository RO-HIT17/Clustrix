import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3.pixelcut.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
