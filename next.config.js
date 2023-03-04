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
  }
}

module.exports = nextConfig
