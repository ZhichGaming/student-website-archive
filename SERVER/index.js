const express = require('express')
const bodyParser = require('body-parser')
const httpProxy = require("http-proxy")

const { jsonToForm } = require('./jsonToForm')

const app = express()
const proxy = httpProxy.createProxyServer()

app.use(bodyParser.json())
app.use('/api/login', jsonToForm)


app.post('/api/login', (req, res) => {
  
  
  proxy.on('proxyRes', (proxyRes, request, response) => {
    var body = [];
    proxyRes.on('data', (chunk) => {
      body.push(chunk);
    });
    proxyRes.on('end', () => {
      body = Buffer.concat(body).toString();
      res.send(body);
    });
  });

  proxy.web(req, res, {
    target: "https://portailc.jdlm.qc.ca/pednet/login.asp",
    changeOrigin: true,
    selfHandleResponse: true,
  });
})

app.listen(3001, () => {
  console.log("listening on port 3001...");
})

// module.exports = app