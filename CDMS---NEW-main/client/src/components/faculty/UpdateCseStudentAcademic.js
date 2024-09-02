import {React, useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function UpdateCseStudentAcademic(){

    const {usn} = useParams();

    useEffect(()=>{  
        try{ 
         const getOneStudentData = async () =>{
         await axios.get('/faculty/getOneStudent/'+usn)
         .then(res=>{
            setValues({...values, ia1:res.data.ia1, ia2: res.data.ia2, ia3: res.data.ia3, attendance: res.data.attendance})})
         }
         getOneStudentData()}
         catch(err){
             console.log(err)
         }
         }, [])
        
    const [values, setValues] = useState({})

    const updateStudentHandler = async () =>{
        await axios.put('/faculty/updateCseStudentAcademic/'+usn, values)       
    }
    
    return(
        <>
        <div className='mt-5 updateCseStudentForm'>
        <h1>Edit the details</h1>
            <form onSubmit={updateStudentHandler}>
                <div className="mb-3 mx-5 mt-5">
                    <label className="form-label updateLabel">USN</label><br />
                    <input type="text"  className="form-control mx-3" value={usn} disabled/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">IA1</label>
                    <input type="text" className="form-control mx-3" value={values.ia1}
                    onChange={e => setValues({...values, ia1 : e.target.value})}
                    />
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">IA2</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.ia2}
                    onChange={e => setValues({...values, ia2 : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">IA3</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.ia3} 
                    onChange={e => setValues({...values, ia3 : e.target.value})}/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Attendance</label>
                    <input type="text" className="form-control mx-3 updateInput" value={values.attendance}
                    onChange={e => setValues({...values, attendance : e.target.value})} />
                </div>
                <Link to={'/faculty/csestudentacademics'}>
                    <button type="submit" className="btn btn-primary updateCseStudentButton mb-5" onClick={updateStudentHandler}>Update</button>
                </Link>
                <button type="submit" className="btn btn-secondary updateCseStudentButton mb-5 mx-2">Back</button>
            </form>
        </div>
        </>
    )
}