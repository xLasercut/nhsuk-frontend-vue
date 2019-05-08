const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

var publicPath = '/'

if (process.env.NODE_ENV === 'ghpages') {
  publicPath = '/nhsuk-frontend-vue/'
}
else if (process.env.NODE_ENV === 'production') {
  publicPath = './'
}

module.exports = {
  publicPath: publicPath,
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
  lintOnSave: false
}
