/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portailc.jdlm.qc.ca",
      },
    ],
  },
};

module.exports = nextConfig;

