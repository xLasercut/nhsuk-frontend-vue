const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

let publicPath = '/'

if (process.env.NODE_ENV === 'ghpages') {
  publicPath = '/nhsuk-frontend-vue/'
}
else if (process.env.NODE_ENV === 'production') {
  publicPath = './'
}

module.exports = {
  transpileDependencies: true,
  publicPath: publicPath,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          //{ from: path.resolve(__dirname, 'public/'), to: '.' },
          { from: path.resolve(__dirname, 'src/docs/examples/'), to: './examples/.'}
        ]
      })
    ]
  }
}
