const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mytasks')

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

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  username: String,
  email: String,
  age: Number,
  power: String,
  joinDate: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema)

User.remove().then(result => console.log(result))
User.find().then(result => console.log(result))

console.log('-------------')

User.insertMany(DUMMY_DATA).then(result => console.log(result))
