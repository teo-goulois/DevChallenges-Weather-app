/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
    hostname: ["cdn.weatherapi.com"],
  },
  experimental: { images: { allowFutureImage: true } },
};
