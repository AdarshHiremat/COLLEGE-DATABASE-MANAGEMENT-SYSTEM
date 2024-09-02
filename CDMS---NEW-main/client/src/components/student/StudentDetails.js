import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function StudentDetails(){
    const [student, setStudent] = useState({})

    const {usn} = useParams()

    const [notFound, setNotFound] = useState("Found")

    useEffect(() =>{
        const fetchDetails = async () =>{
            const {data} = await axios.get('/faculty/getOneStudent/'+usn)
            console.log(data)
            setStudent(data)
            if(data.usn === undefined)
                setNotFound("Not Found")
        }
        fetchDetails()
    })

    return(
        <>
            {
                notFound === "Found" ? 
                <div className='fetchCseStudentForm '>
                <h1>Student details</h1>
                <form>
                    <div className="mb-3  mx-5 mt-5">
                        <label className="form-label updateLabel">USN</label><br />
                        <input type="text"  className="form-control mx-3" value={student.usn} disabled/>
                    </div>
                    <div className="mb-3 mx-5">
                        <label className="form-label updateLabel">IA1</label>
                        <input type="text" className="form-control mx-3" value={student.ia1} disabled/>
                    </div>
                    <div className="mb-3 mx-5">
                        <label className="form-label updateLabel">IA2</label>
                        <input type="text" className="form-control mx-3" value={student.ia2} disabled />
                    </div>
                    <div className="mb-3 mx-5">
                        <label className="form-label updateLabel">IA3</label>
                        <input type="text" className="form-control mx-3" value={student.ia3} disabled />
                    </div>
                    <div className="mb-3 mx-5">
                        <label className="form-label updateLabel">Attendance</label>
                        <input type="text" className="form-control mx-3" value={student.attendance} disabled/>
                    </div>
                    <Link to={'/student'}>
                        <button type="submit" className="btn btn-secondary deleteCseStudentButton mt-2 mx-2">Back</button>
                    </Link>
                </form>
                </div>
                :
                <div className="dataNotFound">
                    <h1 className="mt-2">Data not Found</h1>
                    <h4 className="mt-1">The student you searched is not found in the database</h4>
                </div>
            }
        </>
    )
}