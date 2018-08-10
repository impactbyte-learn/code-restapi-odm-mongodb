const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/seed', controller.seed)
router.get('/', controller.get)
router.post('/', controller.add)

module.exports = router
