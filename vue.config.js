const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nhsuk-frontend-vue/'
    : '/',
  outputDir: "./distghpages",
  pages: {
    index: {
      entry: 'ghpages/src/main.js',
      template: 'ghpages/src/public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    plugins: [
        new CopyWebpackPlugin([{ from: 'ghpages/public/', to: '.' }])
    ]
  }
}