const express = require("express") // import express lib
const userRoute = require('./route/user')
const bodyParser = require('body-parser')
const app = express() // initialize express app

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// setup a '/' endpoint
app.get("/", (req, res, next) => res.send("Welcome brooo"))

// setup a '/hello' endpoint
app.get("/hello", (request, response, next) => {
  response.send({
    message: "Hello World"
  })
})

// app.get("/user:id", (req, res) => {
//   res.json(
//     { 
//       id: req.params.id,
//       username: "auzan"
//     }
//   )
// })

// get router
app.use("/user-json", userRoute)

// setup server to listen on port :3000
app.listen(3000, () => 
  console.log("Express server is ready on localhost:3000")
)