import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns: [
      {
        protocol: 'https', // Assuming the images are served over HTTPS
        hostname: 'originui.com',
        port: '', // Leave empty for default ports (80 for http, 443 for https)
        pathname: '/**', 
      }
    ],
  }
};

export default nextConfig;
