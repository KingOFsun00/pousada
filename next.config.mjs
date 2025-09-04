/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: false },
  // Nova sintaxe:
  serverExternalPackages: ['nodemailer'], // ← Corrigido!
  
  // REMOVA output: 'export' se quiser Web Service
}

export default nextConfig