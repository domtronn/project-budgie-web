/* next.config.js */
require('dotenv').config()

const webpack = require('webpack')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  distDir: '../../dist/functions/next',
  webpack: config => {
    const env = Object
      .keys(process.env)
      .reduce((acc, it) => ({
        ...acc,
        [`process.env.${it}`]: JSON.stringify(process.env[it])
      }), {})

    config.plugins.push(new webpack.DefinePlugin(env))
    config.module.rules.push({ test: /\.css/, use: ['style-loader', 'css-loader'] })

    return config
  }
})
