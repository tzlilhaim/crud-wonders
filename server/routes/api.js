const express = require('express')
const router = express.Router()

const wonders = [
  { name: "Mount Everest", location: "Nepal", visited: false },
  { name: "Grand Canyon", location: "Arizona", visited: false },
  { name: "Botanical Gardens", location: "Singapore", visited: true },
  { name: "Pantheon", location: "Greece", visited: false },
  { name: "Colosseum", location: "Italy", visited: true },
]

router.get("/wonders", function (req, res) {
  res.send(wonders)
})

router.post("/wonder", function (req, res) {
  console.log("Someone's trying to make a post request")
  const wonder = { ...req.body, visited: false }
  wonders.push(wonder)
  res.send(wonders)
})

router.put("/wonder", function (req, res) {
  console.log("Someone's visiting a site")
  const wonder = req.body.wonder
  wonders.find((w) => w.name === wonder).visited = true
  res.send(wonders)
})

router.delete("/wonder", function (req, res) {
  console.log("Someone's deleting a site")
  const wonder = req.body.wonder
  wonders.splice(wonders.lastIndexOf(wonders.find((w) => w.name === wonder)), 1)
  res.send(wonders)
})

module.exports = router
