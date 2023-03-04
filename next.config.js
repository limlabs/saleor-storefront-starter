/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:locale',
        destination: '/:locale/default-channel'
      }
    ]
  },
  async redirects() { 
    return [
      {
        source: '/',
        destination: '/en-us',
        permanent: false
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liminal-labs.saleor.cloud',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
