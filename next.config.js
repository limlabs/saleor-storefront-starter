/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    SALEOR_ENDPOINT: "https://liminal.saleor.cloud/graphql/",
    BASE_URL: "http://localhost:3000/",
  },
  async rewrites() {
    return [
      {
        source: "/:locale",
        destination: "/:locale/default-channel",
      },
      {
        source: "/shop",
        destination: "/en-us/default-channel/c/all",
      },
      {
        source: "/login",
        destination: "/en-us/login",
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
        hostname: "liminal.saleor.cloud",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "liminal.saleor.cloud",
        port: "",
        pathname: "/thumbnail/**",
      },
    ],
  },
};

module.exports = nextConfig;
