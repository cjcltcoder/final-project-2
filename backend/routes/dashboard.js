const express = require('express')
const { updateUser, deleteUser } = require('../controllers/appController')
const router = express.Router()

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router