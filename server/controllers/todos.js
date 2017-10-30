const Todo = require('../models/todo')

class Todos {

  static findAll(req,res){
    Todo.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }

  static postTodo(req,res) {
    Todo.create ({
      description: req.body.description,
      date: req.body.date,
      status: req.body.status
    })
    .then(postData => res.send(postData))
    .catch(err => res.send(err))
  }

  static deleteTodo(req,res) {
    Todo.remove({
      _id: req.params.id
    })
    .then(deleteTodo => {
      res.send({
        message: 'Berhasil Hapus : ',
        deleteTodo: req.params.id
      })
    })
    .catch(err => res.send(err))
  }

  static updateTodo(req,res) {
    console.log(req.body);
    Todo.findOneAndUpdate({
      _id: req.params.id
    }, {
      description: req.body.description,
      date: req.body.date,
      status: req.body.status
    })
    .then(statusTodo => req.send(statusTodo))
    .catch(err => res.send(err))
  }
}

module.exports = Todos
