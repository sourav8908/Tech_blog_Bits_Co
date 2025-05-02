/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Bits-0f-C0de-main' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Bits-0f-C0de-main/' : '',
}

module.exports = nextConfig 