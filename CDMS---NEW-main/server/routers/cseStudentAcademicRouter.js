const cseStudentAcademicController = require('../controllers/cseStudentAcademicController')

const cseStudentAcademicRouter = require('express').Router()

cseStudentAcademicRouter.post('/addStudent', cseStudentAcademicController.addStudent)

cseStudentAcademicRouter.get('/getAllStudents', cseStudentAcademicController.getAllStudents)

cseStudentAcademicRouter.put('/updateCseStudentAcademic/:usn', cseStudentAcademicController.updateStudent)

cseStudentAcademicRouter.get('/getOneStudent/:usn', cseStudentAcademicController.getOneStudent)


module.exports = cseStudentAcademicRouter