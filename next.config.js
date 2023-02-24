/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // domain: ["picsum.photos"],
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
