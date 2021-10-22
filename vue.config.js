const path = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  configureWebpack: {
    entry: {
      app: '@/main.ts',
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // plugins: [new BundleAnalyzerPlugin()],
  },
}
