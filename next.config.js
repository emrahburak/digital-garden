/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: '/images'
  },
  typescript:{
    ignoreBuildErrors:true,
  }
};

module.exports = nextConfig;
