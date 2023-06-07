const immutableResourceHeader = {
  key: "Cache-Control",
  value: "public, max-age=31536000, immutable",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: `/3d/:path*`,
        headers: [immutableResourceHeader],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/en-us",
      },
      {
        source: "/about",
        destination: "/en-us/about",
      },
      {
        source: "/contact",
        destination: "/en-us/contact",
      },
      {
        source: "/services",
        destination: "/en-us/services",
      },

      {
        source: "/:locale",
        destination: "/:locale/default-channel",
      },
      {
        source: "/:locale/c/:slug",
        destination: "/:locale/default-channel/c/:slug",
      },
      {
        source: "/:locale/p/:slug",
        destination: "/:locale/default-channel/p/:slug",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liminal-labs.saleor.cloud",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "liminal-labs.saleor.cloud",
        port: "",
        pathname: "/thumbnail/**",
      },
    ],
  },
};

module.exports = nextConfig;
