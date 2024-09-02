const db = require('../models')

const StudentAcademics = db.cseStudentAcademics
const Student = db.cseStudents

const addStudent = async (req, res)=>{
    let data = {
        usn: req.body.usn,
        ia1: req.body.ia1,
        ia2: req.body.ia2,
        ia3: req.body.ia3,
        attendance: req.body.attendance,   
    }
    const student = await StudentAcademics.create(data)
    res.status(200).send(student)
}

const getAllStudents = async (req, res)=>{
    let students = await Student.findAll({
        include:StudentAcademics
    })
    res.status(200).send(students)
}

const getOneStudent = async (req, res) =>{
    let usn = req.params.usn
    let student = await StudentAcademics.findOne({where: {usn: usn}})
    res.status(200).send(student)
}

const updateStudent = async (req, res) =>{
    let usn = req.params.usn
    let student = await StudentAcademics.update(req.body, {where: {usn: usn}})
    res.status(200).send(student)
}

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent
}