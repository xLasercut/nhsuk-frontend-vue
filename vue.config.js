const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nhsuk-frontend-vue/'
    : '/',
  outputDir: "./distghpages",
  pages: {
    index: {
      entry: path.resolve(__dirname, 'ghpages/src/main.js'),
      template: path.resolve(__dirname, 'ghpages/public/index.html'),
      filename: 'index.html'
    }
  },
  configureWebpack: {
    plugins: [
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'ghpages/public/'), to: '.' }])
    ]
  },
}