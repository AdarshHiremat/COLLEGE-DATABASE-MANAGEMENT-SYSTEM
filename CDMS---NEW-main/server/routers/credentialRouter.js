const credentialController = require('../controllers/credentialController.js')

const router = require("express").Router()

router.post('/addUser', credentialController.addUser)

router.get('/getUser/:loginusername', credentialController.getUser)

module.exports = router