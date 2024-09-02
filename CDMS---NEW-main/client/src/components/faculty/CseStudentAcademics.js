import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default function CseStudentAcademics(){

    const [student, setStudent] = useState([])

    useEffect(() => {
        try{
            const getAllStudentsData = async () =>{
                const {data} = await axios.get('/faculty/getAllStudents')
                setStudent(data)
            }
            getAllStudentsData()
        }
        catch(err){
            console.log(err);
        }
    })

    const tableData = () =>{
        return (student.map(data =>{
            return<>
                <tr>
                    <td>{data.usn}</td>
                    <td>{data.name}</td>
                    <td>{data.semester}</td>
                    <td>{data.section}</td>
                    {data["csestudentacademic"] === undefined ? 
                    <>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                    </>
                    :<>
                    <td>{data["csestudentacademic"].ia1}</td>
                    <td>{data["csestudentacademic"].ia2}</td>
                    <td>{data["csestudentacademic"].ia3}</td>
                    <td>{data["csestudentacademic"].attendance}</td>
                    </>
        }
                    <td><Link to={`/faculty/update/${data.usn}`}><button className='cseStudentEditButton'>Update</button></Link></td>
                </tr>
            </>
        }))
    }
    return(
    <>

        <div className='cseStudentData'>
            <h1>Students Academics Details</h1>
            <div className='cseStudentsTable'>
                <table>
                <thead> 
                    <tr key={"Heading"}>
                    <th>USN</th>
                    <th>Name</th>
                    <th>Semester</th>
                    <th>Section</th>
                    <th>IA1</th>
                    <th>IA2</th>
                    <th>IA3</th>
                    <th>Atendance(in %)</th>
                    <th>Update</th>
                    </tr> 
                </thead>
                <tbody>
                    {tableData()}
                </tbody>
                </table>
            </div>
        </div>
    </>
    )
}