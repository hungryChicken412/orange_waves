/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  }
}

module.exports = nextConfig

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

module.exports = withImages(withTM());