const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  member: {type: Schema.Types.ObjectId, ref: 'Userdata'},
  description: String,
  date: String,
  status: Boolean
})

const Todoes = mongoose.model('Todoes', todoSchema)

module.exports = Todoes
