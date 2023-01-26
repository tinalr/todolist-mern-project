// a model is the structure of our data in the collection; first define a schema

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  // list of fields we need and data type:
  name: String,
  date: String,
  isCompleted: Boolean
})

module.exports = todoSchema