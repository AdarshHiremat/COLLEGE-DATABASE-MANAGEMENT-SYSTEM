import {React, useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function FindStudent(){
    const { usn } = useParams()

    const searchUsn = usn.toUpperCase()

    const [student, setStudent] = useState([])

    const [notFound, setnotFound] = useState("found")

    useEffect(()=>{
        try{
            const getOneStudentData = async () => {
                const {data} = await axios.get('/admin/getOneCseStudent/'+searchUsn)
                setStudent(data)
                if(data.usn === undefined)
                    setnotFound("Not Found")
            }
            getOneStudentData()
        }
        catch(err){
            console.log(err)
        }
    }, [])

    return (
        <>
        {
            notFound === "found"?
           <div className='fetchCseStudentForm mt-5'>
            <h1>Student details</h1>
            <form>
                <div className="mb-3  mx-5 mt-5">
                    <label className="form-label updateLabel">USN</label><br />
                    <input type="text"  className="form-control mx-3" value={student.usn} disabled/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Name</label>
                    <input type="text" className="form-control mx-3" value={student.name} disabled/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Gender</label>
                    <input type="text" className="form-control mx-3" value={student.gender} disabled/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Semester</label>
                    <input type="text" className="form-control mx-3" value={student.semester} disabled />
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Section</label>
                    <input type="text" className="form-control mx-3" value={student.section} disabled/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Phone</label>
                    <input type="text" className="form-control mx-3" value={student.phone} disabled/>
                </div>
                <div className="mb-3 mx-5">
                    <label className="form-label updateLabel">Email</label>
                    <input type="text" className="form-control mx-3" value={student.email} disabled/>
                </div>
                <Link to={'/admin/cse'}><button type="submit" className="btn btn-secondary deleteCseStudentButton mt-2 mx-2">Back</button></Link>
            </form>
        </div>
        :
        <div className="dataNotFound">
            <h1 className="mt-2">Data not Found</h1>
            <h4 className="mt-1">The student you searched is not found in the database</h4>
        </div>}
        </>
    )
}