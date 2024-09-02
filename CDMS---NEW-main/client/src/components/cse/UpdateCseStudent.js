import {React, useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function UpdateCseStudent(){

    const {usn} = useParams();
    
    
    useEffect(()=>{  
       try{ 
        const getOneStudentData = async () =>{
        await axios.get('/admin/getOneCseStudent/'+usn)
        .then(res=>{
            setValues({...values, name:res.data.name, gender: res.data.gender, semester: res.data.semester, section: res.data.section, phone: res.data.phone, email: res.data.email})})
        }
        getOneStudentData()}
        catch(err){
            console.log(err)
        }
        }, [])
        
    const [values, setValues] = useState({})

    const updateStudentHandler = async () =>{
        await axios.put('/admin/updateCseStudent/'+usn, values)       
    }
    
    return(
        <>
        <div className='mt-5 updateCseStudentForm'>
        <h1>Edit the details</h1>
            <form onSubmit={updateStudentHandler}>
                <div className="mb-3 mx-5 mt-5">
                    <label className="form-label updateLabel">USN</label><br />
                    <input type="text"  className="form-control mx-3" value={usn} disabled
                    onChange={e => setValues({...values, usn: e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Name</label>
                    <input type="text" className="form-control mx-3" value={values.name}
                    onChange={e => setValues({...values, name : e.target.value})}
                    />
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Gender</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.gender}
                    onChange={e => setValues({...values, gender : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Semester</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.semester} 
                    onChange={e => setValues({...values, semester : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Section</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.section}
                    onChange={e => setValues({...values, section : e.target.value})} />
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Phone</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.phone}
                    onChange={e => setValues({...values, phone : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Email</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.email} 
                    onChange={e => setValues({...values, email : e.target.value})}/>
                </div>
                <Link to={'/admin/cse'}><button type="submit" className="btn btn-primary updateCseStudentButton mb-5" onClick={updateStudentHandler}>Update</button></Link>
                <Link to={'/admin/cse'}><button type="submit" className="btn btn-secondary updateCseStudentButton mb-5 mx-2">Back</button></Link>
            </form>
        </div>
        </>
    )
}