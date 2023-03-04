/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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
