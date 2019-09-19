const express = require('express')
const router = express.Router()
const userData = require('../data/user')

router.get("/", (req, res) => res.send(userData))

router.post("/", (req, res) => {
  let id = userData.length + 1
  userData.push({
    id,
    nama: req.body.nama
  })
  res.send(userData)
})

router.delete("/:id", (req, res) => {
  const userId = userData.findIndex(x => x.id === Number(req.params.id))
  userData.splice(userId, 1)
  res.send(userData)
})

module.exports = router