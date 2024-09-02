const cseStudentController = require('../controllers/cseStudentController.js')

const router = require('express').Router()

router.post('/addCseStudent', cseStudentController.addStudent)

router.get('/allCseStudents', cseStudentController.getAllStudents)

router.get('/getOneCseStudent/:usn', cseStudentController.getOneStudent)

router.put('/updateCseStudent/:usn', cseStudentController.updateStudent)

router.delete('/deleteCseStudent/:usn', cseStudentController.deleteStudent)

module.exports = router