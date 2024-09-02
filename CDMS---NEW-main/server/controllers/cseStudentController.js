const db = require('../models')

const Student = db.cseStudents
const StudentAcademic = db.cseStudentAcademics

const addStudent = async (req, res)=>{
    let data = {
        usn: req.body.usn,
        name: req.body.name,
        gender: req.body.gender,
        semester: req.body.semester,
        section: req.body.section,
        phone: req.body.phone,
        email: req.body.email
    }
    let academicData = {
        usn: req.body.usn
    }
    const student = await Student.create(data)
    res.status(200).send(student)
    const studentAcademic = await StudentAcademic.create(academicData)
}
const getAllStudents = async (req, res)=>{
    let students = await Student.findAll({})
    res.status(200).send(students)
}
const getOneStudent = async (req, res) =>{
    let usn = req.params.usn
    let student = await Student.findOne({where: {usn: usn}})
    res.status(200).send(student)
}
const updateStudent = async (req, res) =>{
    let usn = req.params.usn
    let student = await Student.update(req.body, {where: {usn: usn}})
    res.status(200).send(student)
}
const deleteStudent = async (req, res) =>{
    let usn = req.params.usn
    await Student.destroy({where: {usn: usn}})
    res.status(200).send('Student deleted')
}
module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
}