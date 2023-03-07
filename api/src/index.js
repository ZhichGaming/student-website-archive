const express = require("express");
const bodyParser = require("body-parser")
const app = express()

const filter = require("./filter.js")

// const port = process.env.PORT
const port = "3001"

app.use(bodyParser.json())
app.use(filter)

app.post("/login", (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

