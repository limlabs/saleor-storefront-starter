/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  env: {
    SALEOR_ENDPOINT: "https://liminal-labs.saleor.cloud/graphql/",
  },
  async rewrites() {
    return [
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
        destination: "/home",
        permanent: false,
      },
      {
        source: "/shop",
        destination: "/en-us/c/all",
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
