/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');
const { ConfigProvider } = require('antd');

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

module.exports = ({
  ...withVideos(),
  reactStrictMode: true,
  swcMinify: true,
  // trailingSlash:true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/index': { page: '/' },
    }
  }
})