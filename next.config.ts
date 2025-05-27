import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images : {
    remotePatterns: [
      {
        protocol: 'https', // Assuming the images are served over HTTPS
        hostname: 'originui.com',
        port: '', // Leave empty for default ports (80 for http, 443 for https)
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'mountainspineortho.b-cdn.net',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/blogs/4',
        destination: '/blogs/4-safe-stretching-techniques-for-postoperative-recovery',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
