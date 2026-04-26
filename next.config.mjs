/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['vm-7vus5dd1976v6ulkz1yo8cnr.vusercontent.net'],
}

export default nextConfig
