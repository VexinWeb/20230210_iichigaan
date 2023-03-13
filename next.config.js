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
  env: {
    REACT_APP_API_TOKEN: process.env.REACT_APP_API_TOKEN,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_UPLOAD_URL: process.env.REACT_APP_UPLOAD_URL,
  },
};

module.exports = nextConfig;
