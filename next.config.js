/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/pousada-savacipo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pousada-savacipo/' : '',
  distDir: 'out'
}

module.exports = nextConfig
