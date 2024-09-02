import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
    return(
        <>
        <div className='facultyDropdown'>
            <a className="nav-link dropdown-toggle choose" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Choose the department</a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/faculty/csestudentacademics">Computer Science & Engineering</Link></li>
                <li><Link className="dropdown-item" to="/faculty/isestudentAcademics">Information Science & Engineering</Link></li>
                <li><Link className="dropdown-item" to="faculty/csdsstudentacademics">Data Science</Link></li>
                <li><a className="dropdown-item" href="/">Civil</a></li>
                <li><a className="dropdown-item" href="/">Mechanical</a></li>
                <li><a className="dropdown-item" href="/">EEE</a></li>
                <li><a className="dropdown-item" href="/">EIE</a></li>
                <li><a className="dropdown-item" href="/">AIML</a></li>
            </ul>
            </div>
        </>
    )
}