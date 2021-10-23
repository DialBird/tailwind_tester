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
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [isDevelopment && new BundleAnalyzerPlugin()].filter(Boolean),
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true,
    },
  },
}
