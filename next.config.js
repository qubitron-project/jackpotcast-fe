/** @type {import('next').NextConfig} */
const { default: next } = require('next');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  trailingSlash: true,
  experimental: {
    // used to restore to same scroll position when user clicks back
    serverActions: true,
    scrollRestoration: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'image.tmdb.org',
      'i.ytimg.com',
      'flixtr.netlify.app',
      'chart.wantu.io',
      'img.youtube.com',
      'yt3.ggpht.com',
      'cdn.wantu.io',
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 클라이언트 사이드에서 사용되는 경우 fs 모듈 제외
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
