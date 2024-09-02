import React, { useState, useEffect } from 'react';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
import FindStudent from './findStudent';


export default function CseStudents() {
  document.title = "Admin - CSE"

  const [show, toggleForm] = useState(false);
  const closeForm = () => toggleForm(false)
  const openForm =() => toggleForm(true)

  const [usn, setUsn] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [semester, setSemester] = useState(1)
  const [section, setSection] = useState('A')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [students, setStudents] = useState([])

  const [search, setSearch] = useState('')
  const searchUsn = search.toUpperCase()

  useEffect(()=>{
    try{
      const getStudentData = async () =>{
        const {data} = await axios.get('/admin/allCseStudents')
        setStudents(data)
      }
    getStudentData()
    }
    catch(err){
      console.log(err)
    }
  }, [])
  
  const addStudentHandler = async () =>{
    const data = {
      usn: usn,
      name: name,
      gender: gender,
      semester: semester,
      section: section,
      phone: phone,
      email: email
    }

    await axios.post('/admin/addCseStudent', data)
  }

  const tableData = () =>{
    return students.map(student =>{
        return<>
          <tr key={student.usn}>
            <td>{student.usn}</td>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>{student.semester}</td>
            <td>{student.section}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td> 
            <td><Link to= {`/admin/cse/updatecsestudent/${student.usn}`}>
              <button className='cseStudentEditButton'>Edit</button>
            </Link></td>
            <td><Link to = {`/admin/cse/deletecsestudent/${student.usn}`}>
              <button className='cseStudentDeleteButton'>Delete</button>
            </Link></td>
          </tr> 
        </>          
    })
  }

  return (
    <>
    <Modal show={show}  onHide={closeForm}>
    <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form onSubmit={addStudentHandler}>
              <label className='mx-1'>USN:</label><br />
              <input type='text' value={usn} onChange={(e)=> setUsn(e.target.value)}required className='mt-1 mx-2'/><br />
              <label className='mx-1'>Name:</label><br />
              <input type='text' required  value={name} onChange={(e)=> setName(e.target.value)} className='mt-1 mx-2' />  <br />
              <label className='mx-1'>Gender:</label><br />
              <input type='text' required value={gender} onChange={(e)=> setGender(e.target.value)} className='mt-1 mx-2' /><br />  
              <label className='mx-1'>Semester:</label><br />
              <input type='number' required value={semester} onChange={(e)=>setSemester(e.target.value)} className='mt-1 mx-2' /><br />  
              <label className='mx-1'>Section:</label><br />
              <input type='text' required value={section} onChange={(e)=> setSection(e.target.value)} className='mt-1 mx-2' /> <br /> 
              <label className='mx-1'>Phone:</label><br />
              <input type='text' required value={phone} onChange={(e)=> setPhone(e.target.value)} className='mt-1 mx-2' /> <br /> 
              <label className='mx-1'>Email:</label><br />
              <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} className='mt-1 mx-2' />  <br />
              <button type='submit' className='btn btn-primary mt-3'>Add</button>
        </form>
    </Modal.Body>
  </Modal>

    <button className='btn btn-primary addStudentButton' onClick={openForm}>Add Student</button>

    <form className="searchButton" onSubmit={FindStudent}>
      <input className="form-control" type="text" placeholder="Search" value={search}
      onChange={(e)=> setSearch(e.target.value)}/>
      <Link to={`/admin/cse/findstudent/${searchUsn}`}><button className="btn btn-outline-primary" type="submit">Search</button></Link>
    </form>

    <div className='cseStudentData'>
      <h1>Students Database</h1>
      <div className='cseStudentsTable'>
        <table>
          <thead> 
            <tr key={"Heading"}>
            <th>USN</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Semester</th>
            <th>Section</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
            </tr> 
          </thead>
          <tbody>
            {tableData()}
          </tbody>
        </table>
      </div>
    </div>
    </>
    )
  }
  