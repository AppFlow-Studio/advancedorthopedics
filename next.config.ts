import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- SEO OPTIMIZATION: Enforce consistent URLs ---
  // This ensures that pages with a trailing slash (e.g., /locations/)
  // are permanently redirected to the non-slash version (/locations).
  // This prevents duplicate content issues with search engines.
  trailingSlash: false,

  /* Your existing config options */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'originui.com',
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
      },
      {
        source: '/locations/1',
        destination: '/locations/altamonte-springs-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/2',
        destination: '/locations/davenport-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/3',
        destination: '/locations/palm-spring-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/4',
        destination: '/locations/hollywood-fl-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/5',
        destination: '/locations/orlando-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/6',
        destination: '/locations/palm-beach-gardens-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/7',
        destination: '/locations/miami-beach-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/8',
        destination: '/locations/boca-raton-orthopedics',
        permanent: true,
      },
      {
        source: '/locations/9',
        destination: '/locations/fort-pierce-orthopedics',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
