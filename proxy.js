const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', createProxyMiddleware({
    target: 'https://srm.beetrack.dev',
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader('cookie', 'PASTE YOUR app.beetrack.dev COOKIE HERE')
    }
}))

app.listen(8080)
