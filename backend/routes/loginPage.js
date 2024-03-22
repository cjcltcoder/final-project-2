const express = require('express')
const router = express.Router()
const {getUser, addUser} = require('../controllers/appController')

router.get('/', getUser)

router.post('/', addUser)

module.exports = router