/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
}
