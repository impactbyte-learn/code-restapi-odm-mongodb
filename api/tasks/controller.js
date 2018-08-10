const Task = require('./model')
const User = require('../users/model')

const DUMMY_TASKS = [
  {
    text: 'One'
  },
  {
    text: 'Two'
  },
  {
    text: 'Three'
  }
]

const controller = {
  seed: async (req, res, next) => {
    Task.insertMany(DUMMY_TASKS)
      .then(tasks => res.status(200).send(tasks))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      )
  },

  get: async (req, res, next) => {
    Task.find()
      .then(tasks => {
        res.status(200).send(tasks)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  add: async (req, res, next) => {
    const newTask = {
      text: req.body.text
    }

    const task = await Task.create(newTask)

    const user = await User.findOneAndUpdate(
      {
        _id: '5b6d55fe17dc48e9eb00902c'
      },
      {
        $push: {
          tasks: task.id
        }
      }
    )

    res.status(201).send({
      task,
      user
    })
  }
}

module.exports = controller
