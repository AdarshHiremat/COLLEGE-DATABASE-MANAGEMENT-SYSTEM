import { Link } from 'react-router-dom'
import logo from '../images/logo1.png'
import {Modal} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Navbar(props) {
    const [show, toggleLogin] = useState(false);
    const closeLogin = () => toggleLogin(false)
    const openLogin =() => toggleLogin(true)

    const [showSignUp, toggleSignUp] = useState(false);
    const closeSignUp = () => toggleSignUp(false)
    const openSignUp =() => toggleSignUp(true)

    const [showForm, toggleForm] = useState(false);

    const closeForm = () => toggleForm(false)
    const closeAdmin = async () => {
        let data = {
            role: "Admin"
        }
        console.log(role);
        // try{
        //     await axios.post('/authority/logInDetails',data)
        // }
        // catch(err){
        //     console.log(err);
        // }
        toggleForm(false)
    }

    const closeFaculty = async () =>{
        let data = {
            role: "Faculty"
        }
        // try{
        //     await axios.post('/authority/logInDetails', data)
        // }
        // catch(err){
        //     console.log(err);
        // }
        toggleForm(false)
    }

    const closeStudent = async () =>{
        let data = {
            role: "Student"
        }
        // try{
        //     await axios.post('/authority/logInDetails', data)
        // }
        // catch(err){
        //     console.log(err);
        // }
        toggleForm(false)
    }

    const openForm =() => toggleForm(true)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

    const credentials = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        role: role,
        email: email
    }

    const [loginusername, setloginusername] = useState('') 
    const [loginPassword, setLoginPassword] = useState('') 
    const [data, setData] = useState([])

    const getUser = async () =>{
    try{
        console.log(loginusername);
        await axios.get('/credential/getUser/'+loginusername)
        .then((data) => {console.log(data.data)})
        .catch(err => console.log(err))
    }
    catch(err){
        console.log(err)
    }
}


    const formHandler = async () =>{
        try{
            if(password===confirmPassword){
                await axios.post('/credential/addUser',credentials)
                console.log("inserted");
            }
            else{
                console.log("ERROR");
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }


  return (
    <>


    {/* Login form to take the details from the user and authenticate it */}
        <div className='loginForm'>
          <Modal show={show}  onHide={closeLogin} className='loginForm'>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                            <div className='formUsername'>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                <label className='mx-1'>Username</label><br />
                                <input type='text' required className='mt-1' value={loginusername}
                                onChange={e => setloginusername(e.target.value)}/>
                            </div> 
                            <div className='formPassword mt-3'>
                                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                <label className='mx-1'>Password</label><br />
                                <input type='password' required className='mt-1' value={loginPassword}
                                onChange={e => setLoginPassword(e.target.value)}/>
                            </div> 
                            <button className='btn btn-primary' onClick={getUser}>Log In</button>
                </form>
            </Modal.Body>
          </Modal>
        </div>

        {/* Sign Up form to get the details from the user and register them */}
        <div>
           <Modal show={showSignUp}  onHide={closeSignUp}>
             <Modal.Header closeButton>
                 <Modal.Title>Sign Up</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <form>
                     <div className='formUsername'>
                         <i className="fa fa-user-circle" aria-hidden="true"></i>
                         <label className='mx-2 '>Username</label><br />
                         <input type='text' required value={username}
                         onChange={e=> setUsername(e.target.value)}/>
                     </div> 
                     <div className='formUsername'>
                         <i className="fa fa-envelope" aria-hidden="true"></i>
                         <label className='mx-2 formLabel'>Email</label><br />
                         <input type='password' required value={email}
                         onChange={e => setEmail(e.target.value)} />
                     </div> 
                     <div className='formUsername'>
                     <span>&#128100;</span>
                        <label className='mx-2 formLabel'>Role</label><br />
                         <select value={role} onChange={e => setRole(e.target.value)} className='mx-5'>
                            <option>------</option>
                            <option>Admin</option>
                            <option>Faculty</option>
                            <option>Student</option>
                         </select>
                     </div> 
                     <div className='formPassword'>
                         <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                         <label className='mx-2 formLabel'>Password</label><br />
                         <input type='password' required  value={password}
                         onChange={e => setPassword(e.target.value)}/>
                     </div> 
                     <div className='formPassword'>
                         <i className="fa fa-eye-slash" aria-hidden="true"></i>
                         <label className='mx-2 formLabel'>Confirm Password</label><br />
                         <input type='password' required value={confirmPassword}
                         onChange={e => setConfirmPassword(e.target.value)}/>
                     </div>   
                    <Link to={'/'}><button type='submit' className='btn btn-primary updateCseStudentButton' onClick={formHandler}>Register</button></Link>
                 </form>
             </Modal.Body>
           </Modal>
         </div>


         {/* for timely sake using this form */}
         <div>
         <Modal show={showForm}  onHide={closeForm} className='Form'>
            <Modal.Header closeButton>
                <Modal.Title>Select your designation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Link to={'/admin'}><button className='btn btn-primary mx-4' onClick={closeAdmin}>Admin</button></Link>
               <Link to={'/faculty'}><button className='btn btn-primary mx-4' onClick={closeFaculty}>Faculty</button></Link>
               <Link to={'/student'}><button className='btn btn-primary mx-4' onClick={closeStudent}>Student</button></Link>
            </Modal.Body>
          </Modal>
         </div>

        {/* Navbar  */}
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} alt='logo' />
                <a className="navbar-brand head" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-disabled="true" href='#about'>About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>            
                    <button type='button' className='signUpButton' onClick={openForm}>Role</button>
                    {/* <button type='button' className='signUpButton' onClick={openSignUp}>Sign Up</button> */}
                </div>
            </div>
        </nav>
    </>
  )
}
