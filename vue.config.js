const path = require('path')

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
  },
}
