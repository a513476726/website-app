/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // trailingSlash:true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  }
}