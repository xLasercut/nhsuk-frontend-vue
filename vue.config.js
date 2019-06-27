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
  outputDir: "./dist_docs",
  pages: {
    index: {
      entry: path.resolve(__dirname, 'docs/src/main.js'),
      template: path.resolve(__dirname, 'docs/public/index.html'),
      filename: 'index.html'
    }
  },
  configureWebpack: {
    plugins: [
        new CopyWebpackPlugin([
          { from: path.resolve(__dirname, 'docs/public/'), to: '.' },
          { from: path.resolve(__dirname, 'docs/src/examples/'), to: './examples/.'}
        ])
    ]
  },
  lintOnSave: false
}
