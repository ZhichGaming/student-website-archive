/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    additionalData: `@use "~/app/variables.scss" as *;`,
  },
}

module.exports = nextConfig
