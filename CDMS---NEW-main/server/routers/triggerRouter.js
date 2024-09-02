const triggerController = require('../controllers/triggerController.js')

const router = require('express').Router()

router.post('/logInDetails', triggerController.addData)

module.exports = router