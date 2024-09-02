import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Admin(props) {
    document.title = "CDMS - Admin"
    const [show, toggle] = useState(false);
    const handleShow = () => toggle(true);
    const handleClose = () => toggle(false)
  return (
    <>
    <h3 className='my-5 mx-5'>{props.heading}</h3>
    <div className='admin'>
      <button className='btn btn-primary' onClick={handleShow}>CSE</button>
      <button className='btn btn-primary' onClick={handleShow}>CSE - Cyber Security</button>
      <button className='btn btn-primary' onClick={handleShow}>CSE - DS</button>
      <button className='btn btn-primary' onClick={handleShow}>ISE</button><br />
      <button className='btn btn-primary second' onClick={handleShow}>ECE</button>
      <button className='btn btn-primary second' onClick={handleShow}>Mechanical</button>
      <button className='btn btn-primary second' onClick={handleShow}>Civil</button>
      <button className='btn btn-primary second' onClick={handleShow}>EIE</button>
    </div>
    <div className='container'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='updateButtons'>
            <Link to='/admin/cse'><button className='btn btn-primary mx-5' >Student Details</button></Link>
            <Link to='/admin/cse/faculty'><button className='btn btn-primary mx-2'>Faculty Details</button></Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    </>
  )
}
