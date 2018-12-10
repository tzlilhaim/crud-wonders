const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const naturalWonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: true }
]

app.get('/wodners', function (req, res) {
    res.send(naturalWonders)
})

const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})