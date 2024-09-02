import React, { useState, useEffect } from 'react';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function CseFaculty() {
  document.title = "Admin - CSE"

  const [show, toggleForm] = useState(false);
  const closeForm = () => toggleForm(false)
  const openForm =() => toggleForm(true)

  const [facultyId, setFacultyId] = useState(0)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [designation, setDesignation] = useState('')
  const [experience, setExperience] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [faculties, setFaculties] = useState([])

  useEffect(()=>{
    try{
      const getFacultyData = async () =>{
        const {data} = await axios.get('/admin/faculty/allCseFaculties')
        setFaculties(data)
      }
    getFacultyData()
    }
    catch(err){
      console.log(err)
    }
  }, [])

  const deleteFacultyHandler = async (facultyid) =>{
    console.log(facultyid);
    await axios.delete('/admin/faculty/deleteCseFaculty/'+facultyid)
}
  
  const addFacultyHandler = async () =>{
    const data = {
      facultyid: facultyId,
      name: name,
      gender: gender,
      designation: designation,
      experience: experience,
      phone: phone,
      email: email
    }
    try{
        await axios.post('/admin/faculty/addCseFaculty', data)
    }
    catch(err){
        console.log(err);
    }
  }

  const tableData = () =>{
    return faculties.map(faculty =>{
        return<>
          <tr key={faculty.usn}>
            <td>{faculty.facultyid}</td>
            <td>{faculty.name}</td>
            <td>{faculty.gender}</td>
            <td>{faculty.designation}</td>
            <td>{faculty.experience}</td>
            <td>{faculty.phone}</td>
            <td>{faculty.email}</td> 
            <td>
              <Link to={`/admin/faculty/deleteCseFaculty/${faculty.facultyid}`}><button className='cseStudentDeleteButton'>Delete</button></Link>
            </td>
          </tr> 
        </>          
    })
  }

  return (
    <>
    <Modal show={show}  onHide={closeForm}>
    <Modal.Header closeButton>
        <Modal.Title>Faculty Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form onSubmit={addFacultyHandler}>
              <label className='mx-1'>Faculty Id:</label><br />
              <input type='number' value={facultyId} onChange={(e)=> setFacultyId(e.target.value)}required className='mt-1 mx-2'/><br />
              <label className='mx-1'>Name:</label><br />
              <input type='text' required  value={name} onChange={(e)=> setName(e.target.value)} className='mt-1 mx-2' />  <br />
              <label className='mx-1'>Gender:</label><br />
              <input type='text' required value={gender} onChange={(e)=> setGender(e.target.value)} className='mt-1 mx-2' /><br />  
              <label className='mx-1'>Designation:</label><br />
              <input type='text' required value={designation} onChange={(e)=>setDesignation(e.target.value)} className='mt-1 mx-2' /><br />  
              <label className='mx-1'>Experience:</label><br />
              <input type='number' required value={experience} onChange={(e)=> setExperience(e.target.value)} className='mt-1 mx-2' /> <br /> 
              <label className='mx-1'>Phone:</label><br />
              <input type='text' required value={phone} onChange={(e)=> setPhone(e.target.value)} className='mt-1 mx-2' /> <br /> 
              <label className='mx-1'>Email:</label><br />
              <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} className='mt-1 mx-2' />  <br />
              <button type='submit' className='btn btn-primary mt-3'>Add</button>
        </form>
    </Modal.Body>
  </Modal>

    <button className='btn btn-primary addStudentButton' onClick={openForm}>Add Faculty</button>

    <div className='cseStudentData'>
      <h1>Faculty Database</h1>
      <div className='cseStudentsTable'>
        <table>
          <thead> 
            <tr key={"Heading"}>
            <th>Faculty Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Phone</th>
            <th>Email</th>
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
  