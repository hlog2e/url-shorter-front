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
        destination: "http://localhost:3001/url/:alias",
      },
      {
        source: "/api/url",
        destination: "http://localhost:3001/url",
      },
    ];
  },
};

module.exports = nextConfig;
