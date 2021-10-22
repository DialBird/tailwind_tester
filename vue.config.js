const path = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDevelopment = process.env.NODE_ENV !== 'production'

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
    plugins: [isDevelopment && new BundleAnalyzerPlugin()].filter(Boolean),
  },
}
