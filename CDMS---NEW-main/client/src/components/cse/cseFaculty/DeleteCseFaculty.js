import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DeleteCseFaculty(){
    const {facultyid} = useParams();
    // console.log(usn)
    useEffect(()=>{
        const getOneFacultyData = async () =>{
            await axios.get('/admin/faculty/getOneCseFaculty/'+facultyid)
            .then(res=>{
                setValues({...values, name:res.data.name, gender: res.data.gender, designation: res.data.designation, experience: res.data.experience, phone: res.data.phone, email: res.data.email})})
            }
            getOneFacultyData()
        }, [])
        
    const [values, setValues] = useState({})

    const deleteFacultyHandler = async () =>{
        await axios.delete('/admin/faculty/deleteCseFaculty/'+facultyid)
    }
    
    return(
        <>
        <div className='deleteCseStudentForm mt-5'>
        <h1>Delete details</h1>
            <form>
                <div className="mb-3  mx-5 mt-5">
                    <label className="form-label updateLabel">Faculty Id</label><br />
                    <input type="text"  className="form-control mx-3" value={facultyid} disabled
                    onChange={e => setValues({...values, facultyid: e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Name</label>
                    <input type="text" className="form-control mx-3" value={values.name} disabled
                    onChange={e => setValues({...values, name : e.target.value})}
                    />
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Gender</label>
                    <input type="text" className="form-control mx-3" value={values.gender} disabled
                    onChange={e => setValues({...values, gender : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Designation</label>
                    <input type="text" className="form-control mx-3" value={values.designation} disabled 
                    onChange={e => setValues({...values, semester : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Experience</label>
                    <input type="text" className="form-control mx-3" value={values.experience} disabled
                    onChange={e => setValues({...values, section : e.target.value})} />
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Phone</label>
                    <input type="text" className="form-control mx-3" value={values.phone} disabled
                    onChange={e => setValues({...values, phone : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Email</label>
                    <input type="text" className="form-control mx-3" value={values.email} disabled
                    onChange={e => setValues({...values, email : e.target.value})}/>
                </div>
                <Link to={'/admin/cse/faculty'}><button type="submit" className="btn btn-danger deleteCseStudentButton mt-2" onClick={deleteFacultyHandler}>Delete</button></Link>
                <Link to={'/admin/cse/faculty'}><button type="submit" className="btn btn-secondary deleteCseStudentButton mt-2 mx-2">Back</button></Link>
            </form>
        </div>
        </>
    )
}