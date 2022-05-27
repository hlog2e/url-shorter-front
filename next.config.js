/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:alias",
        destination: process.env.API_SERVER + "/url/:alias",
      },
      {
        source: "/api/url",
        destination: process.env.API_SERVER + "/url",
      },
    ];
  },
};

module.exports = nextConfig;
