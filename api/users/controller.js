const User = require('./model')

const DUMMY_DATA = [
  {
    username: 'haidar',
    email: 'haidar@example.com',
    address: 'Mars',
    age: 200
  },
  {
    username: 'michael',
    email: 'michael@example.com',
    address: 'Kabil',
    power: 'Fly'
  },
  {
    username: 'amirul',
    email: 'amirul@example.com',
    address: 'Tiban'
  }
]

const controller = {
  seed: async (req, res, next) => {
    User.insertMany(DUMMY_DATA)
      .then(users => res.status(200).send(users))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      )
  },

  get: async (req, res, next) => {
    User.find()
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  getOne: async (req, res, next) => {
    User.findOne({
      _id: req.params.id
    })
      .populate('tasks')
      .exec((err, result) => {
        console.log('result:', result)
        res.status(200).send(result)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  }
}

module.exports = controller
