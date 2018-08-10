# Code REST API ODM MongoDB

Example of using MongoDB in Node.js

## Getting Started

### Install MongoDB

**Ubuntu**

Follow this guide: <https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu>

```sh
sudo apt install mongodb-org
```

Verify that MongoDB has started successfully

```sh
sudo service mongod start
mongo
```

**MacOS**

```sh
brew install mongodb
```

Verify that MongoDB has started successfully

```sh
brew services start mongodb
mongo
```

### Install MongoDB GUI Client

- Robo 3T
- Studio 3T
- MongoDB Atlas

### Test Data

```js
db.getCollection('users').find()

db.users.insert({
  username: 'haidar',
  email: 'haidar@example.com',
  address: 'Mars'
})

db.users.insertMany([
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
])

db.users.db.users.update({}, { $unset: { id: '' } }, { multi: true })
```
