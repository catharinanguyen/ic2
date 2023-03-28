/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.worker.js$/,
      loader: 'worker-loader',
    })

    return config
  },
}

module.exports = nextConfig
