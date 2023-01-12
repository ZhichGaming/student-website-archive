/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    // includePaths: [path.join(__dirname, "app")],
    additionalData: `@use "~/app/variables.scss" as *;`,
  }
}

module.exports = nextConfig
