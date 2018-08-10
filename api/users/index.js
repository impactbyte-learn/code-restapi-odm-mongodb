const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/seed', controller.seed)
router.get('/', controller.get)
router.get('/:id', controller.getOne)

module.exports = router
