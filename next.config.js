/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    // includePaths: [path.join(__dirname, "app")],
    additionalData: `@use "~/app/variables.scss" as *;`,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/login',
  //       destination: 'https://portailc.jdlm.qc.ca/pednet/login.asp',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
