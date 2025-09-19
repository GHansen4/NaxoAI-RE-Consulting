/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is stable in Next.js 14, no experimental flag needed
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
  }
}

module.exports = nextConfig
