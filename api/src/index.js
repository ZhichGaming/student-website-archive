const express = require("express");
const bodyParser = require("body-parser")
const httpProxy = require('http-proxy');
const app = express()

const proxy = httpProxy.createProxyServer({
  target: 'https://portailc.jdlm.qc.ca/pednet/login.asp',
  changeOrigin: true,
});

const filter = require("./filter.js")

// const port = process.env.PORT
const port = "3001"

app.use(bodyParser.json())

app.post("/login", filter, (req, res) => {
  proxy.web(req, res)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

