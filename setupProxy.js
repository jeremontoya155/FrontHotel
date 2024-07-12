const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL || 'https://backhotel-production-c839.up.railway.app',
      changeOrigin: true,
    })
  );
};
