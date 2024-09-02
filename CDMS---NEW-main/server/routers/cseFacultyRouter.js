const cseFacultyController = require('../controllers/csefacultyController.js')

const router = require('express').Router()

router.post('/addCseFaculty', cseFacultyController.addFaculty)

router.get('/allCseFaculties', cseFacultyController.getAllFaculty)

router.get('/getOneCseFaculty/:facultyid', cseFacultyController.getOneFaculty)

// router.put('/updateCseStudent/:usn', cseStudentController.updateStudent)

router.delete('/deleteCseFaculty/:facultyid', cseFacultyController.deleteFaculty)

module.exports = router