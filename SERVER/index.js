const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use("/api/login", (req, res, next) => {
  if (req.method == "POST") next();

  
  next()
})

app.post('/api/login', (req, res) => {
  res.send(JSON.stringify(req.body));
})



module.exports = app