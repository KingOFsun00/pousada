/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',
  trailingSlash: true,
  assetPrefix: '.', // ← Esta é a linha importante!
}

export default nextConfig