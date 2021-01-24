const common = require('./webpack.config')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into dom
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into scss
        ],
      }
    ]
  }
})
