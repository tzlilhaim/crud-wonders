const express = require("express")
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
const api = require('./server/routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))

const port = 1337
app.listen(port, function () {
  console.log(`Server running on ${port}`)
})
