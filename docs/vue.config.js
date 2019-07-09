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
  lintOnSave: false,
  configureWebpack: {
    plugins: [
        new CopyWebpackPlugin([
          { from: path.resolve(__dirname, 'public/'), to: '.' },
          { from: path.resolve(__dirname, 'src/examples/'), to: './examples/.'}
        ])
    ]
  }
}
