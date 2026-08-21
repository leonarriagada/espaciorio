import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unoptimize images in development so local network IPs (e.g. 192.168.x.x) load static assets directly without dev server proxy issues
    unoptimized: process.env.NODE_ENV === 'development',
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: ["192.168.1.4", "http://192.168.1.4", "http://192.168.1.4:3000"],

};

export default nextConfig;
