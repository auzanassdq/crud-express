const todos = require("../models/todos")

module.exports = {
  // get all todo
  getAll: (req, res) => {
    res.send(todos)
  },

  // get todo by id
  getById: (req, res) => {
    try {
      const todoId = todos.find(item => item.id == req.params.id)
      res.send({
        message: "Here is what you looking for",
        todoId
      })
    } catch (error) {
      res.send({
        message: "error get todo by id",
        error
      })
    }
  },

  // add new todo
  addTodo: (req, res) => {
    try {
      let id = todos.length + 1
      let newTodo = {
        id,
        name: req.body.name
      }

      todos.push(newTodo)
      res.status(200).send({
        message: "todo successfully added",
        todos
      })
    } catch (error) {
      res.send({
        message: "error add todo",
        error
      })
    }
  },

  // delete todo by id
  deleteTodo: (req, res) => {
    try {
      const idToDelete = req.params.id
      let todos = todos.filter(item => item.id !== parseInt(idToDelete))
      
      res.status(200).send(todos)
    } catch (error) {
      res.send({
        message: "error delete todo",
        error
      })
    }
  },

  // update todo by id
  updateTodo: (req, res) => {
    try {
      let getTodoToUpdate = todos.findIndex(item => item.id == req.params.id)

      todos.map(item => {
        if (data.id == req.params.id) {
          todos[getTodoToUpdate].name = req.body.name
        }
      })
      res.send({
        message: "data successfully update",
        todos
      })
    } catch (error) {
      res.send({
        message: "error update todo",
        error
      })
    }
  }

}