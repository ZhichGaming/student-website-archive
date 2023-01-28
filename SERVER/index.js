const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use("/login", (req, res, next) => {
  req.body = req.method;
  next()
})

app.post('/login', (req, res) => {
  res.send(JSON.stringify(req.body));
})



module.exports = app