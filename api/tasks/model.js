const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/mytasks')

const TaskSchema = new Schema({
  text: {
    type: String,
    required: true
  }
})

TaskSchema.plugin(uniqueValidator)

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
