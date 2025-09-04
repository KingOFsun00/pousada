/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  // REMOVA output: 'export' e related configs
  experimental: {
    serverComponentsExternalPackages: ['nodemailer']
  }
}

export default nextConfig