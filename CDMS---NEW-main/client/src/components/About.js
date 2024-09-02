import React from 'react'
import aboutImage from '../images/About.png'

export default function About() {
  return (
    <>
    <div className='about' id="about">
        <div className='aboutContent mx-5 my-4'>
          <h2>About Us</h2>
          <p>Welcome to our College Database Management System (CDMS), the centralized platform revolutionizing academic data management 
            within our institution. With user-friendly tools tailored for administrators, faculty, and students, our system ensures seamless
            access to vital educational information. Administrators effortlessly maintain data integrity by managing student and faculty details, 
            while students stay informed about their academic progress and faculty streamline grading processes. Our CDMS enhances efficiency, 
            transparency, and data reliability, ushering in a new era of innovation in education management. Join us and discover how our CDBMS 
            can elevate your academic experience today!            
          </p> 
        </div>
        <img src={aboutImage} alt='....' className='aboutImage'/>
    </div>
    </>
  )
}
