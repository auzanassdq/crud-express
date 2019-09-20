const express = require("express")
const route = express.Router()

const todoController = require("../controllers/todos.js")

route.get("/", todoController.getAll)
route.get("/:id", todoController.getById)
route.post("/", todoController.addTodo)
route.delete("/:id", todoController.deleteTodo)
route.put("/:id", todoController.updateTodo)

module.exports = route