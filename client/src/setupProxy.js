const createProxyMiddleware = require('http-proxy-middleware')
require('dotenv').config({ path: `${process.cwd()}/../.env` })

const port = process.env.PORT || 8090

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  )
}
