const { withNextVideo } = require('next-video\process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextVideo(nextConfig)
