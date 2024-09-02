import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DeleteCseStudent(){
    const {usn} = useParams();
    console.log(usn)
    useEffect(()=>{
        const getOneStudentData = async () =>{
            await axios.get('/admin/getOneCseStudent/'+usn)
            .then(res=>{
                setValues({...values, name:res.data.name, gender: res.data.gender, semester: res.data.semester, section: res.data.section, phone: res.data.phone, email: res.data.email})})
            }
            getOneStudentData()
        }, [])
        
    const [values, setValues] = useState({})

    const deleteStudentHandler = async () =>{
        await axios.delete('/admin/deleteCseStudent/'+usn)
    }
    
    return(
        <>
        <div className='deleteCseStudentForm mt-5'>
        <h1>Delete details</h1>
            <form onSubmit={deleteStudentHandler}>
                <div className="mb-3  mx-5 mt-5">
                    <label className="form-label updateLabel">USN</label><br />
                    <input type="text"  className="form-control mx-3" value={usn} disabled
                    onChange={e => setValues({...values, usn: e.target.value})}/>
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
                    <label className="form-label updateLabel">Semester</label>
                    <input type="text" className="form-control mx-3" value={values.semester} disabled 
                    onChange={e => setValues({...values, semester : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Section</label>
                    <input type="text" className="form-control mx-3" value={values.section} disabled
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
                <Link to={'/admin/cse'}><button type="submit" className="btn btn-danger deleteCseStudentButton mt-2" onClick={deleteStudentHandler}>Delete</button></Link>
                <Link to={'/admin/cse'}><button type="submit" className="btn btn-secondary deleteCseStudentButton mt-2 mx-2">Back</button></Link>
            </form>
        </div>
        </>
    )
}