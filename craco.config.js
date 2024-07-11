const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'https://backhotel-production-c839.up.railway.app',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
};
