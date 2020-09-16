
var path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// function resolve(dir) {
//   return path.join(__dirname, './', dir)
// }
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/common/css/index.styl')
      ]
    })
}
let Isproduct = process.env.NODE_ENV == 'production'
let opt = {};
if (Isproduct) {
  opt = {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 5,
          name: 'vendor22.js',
        },
        default: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
  }
}
module.exports = {



  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'vue3-beta.1'
        return args
      })
  },
  configureWebpack: {
    optimization: opt
  },
}