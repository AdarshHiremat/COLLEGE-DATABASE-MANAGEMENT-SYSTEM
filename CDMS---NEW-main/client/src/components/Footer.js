import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className='foot'>
            <footer className="d-flex flex-column flex-sm-row justify-content-between py-3 my-4 border-top">
                <div>
                    <ul className="nav flex-column ">
                        <li className="nav-item mx-3"><a href="/" className="nav-link p-0">Home</a></li>
                        <li className="nav-item mx-3"><a href="#about" className="nav-link p-0">About</a></li>
                        <li className="nav-item mx-3"><a href="/" id="contact" className="nav-link p-0">Contact: 7892937355</a></li>
                    </ul>
                </div>
                    <h5 className='mx-5'> © CDMS</h5>
                    <ul className="list-unstyled d-flex">
                        <li><Link to='/' className="fa fa-facebook m-2"></Link></li>
                        <li><Link to='/' className="fa fa-twitter m-2"></Link></li>
                        <li><Link to="/" className="fa fa-linkedin m-2"></Link></li>
                        <li><Link to="/" className="fa fa-youtube m-2"></Link></li>
                        <li><Link to="/" className="fa fa-instagram m-2 mx-2"></Link></li>
                    </ul>
                    
            </footer>
        </div>
    </>
  )
}
