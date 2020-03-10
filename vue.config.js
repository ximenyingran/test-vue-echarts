module.exports = {
  devServer: {
      open: true,  // 自动打开网页
      hot: true,
      proxy: {
          '/': {
              target: 'http://localhost:8081',
              ws: false,
              changeOrigin: true
          }
      },
  }
}