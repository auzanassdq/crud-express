const express = require("express") // import express lib
const createError = require("http-errors")
const path = require("path")
const bodyParser = require('body-parser')
const app = express() // initialize express app

// PORT for heroku
const PORT = process.env.PORT || 3000

// Import Router in this project
const todoRouter = require('./routes/todo')
const userRouter = require("./routes/user")

app.set("view engine", "pug")
app.set("view", path.join(__dirname, "views"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routing
app.get("/", (req, res, next) => {
  res.send("Hellloooo... add '/todo' to your url to get todos api")
})
app.use("/todo", todoRouter)
app.use("/user", userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err: {}

  res.status(err.status || 500)
  res.send("error")
})

// setup server to listen on port :3000
app.listen(PORT, () => 
  console.log("Express server is ready")
)