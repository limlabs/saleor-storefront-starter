/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/about",
      },
      {
        source: "/support",
        destination: "/support",
      },
      {
        source: "/talk",
        destination: "/talk",
      },
      {
        source: "/zine",
        destination: "/zine",
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en-us",
        permanent: false,
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
