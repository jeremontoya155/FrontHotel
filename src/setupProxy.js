const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://backhotel-production-c839.up.railway.app', // Asegúrate de que este sea el URL correcto
      changeOrigin: true,
    })
  );
};
