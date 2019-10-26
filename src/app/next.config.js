/* next.config.js */
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
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
}
