var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todos')
/* GET home page. */
router.get('/', todoController.findAll)
router.post('/', todoController.postTodo)
router.put('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)
module.exports = router;
