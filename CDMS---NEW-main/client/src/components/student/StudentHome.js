import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentHome(){

    const [search, setSearch] = useState('')
    const searchUsn = search.toUpperCase()
    return(
        <>
            <div className="studentDetails">
                <h1>Enter your USN to fetch the data</h1>
                    <form className="searchButton">
                        <input className="form-control" type="text" placeholder="Search" value={search}
                        onChange={(e)=> setSearch(e.target.value)}/>
                        <Link to={`/student/studentDetails/${searchUsn}`}><button className="btn btn-outline-primary studentSearchButton" type="submit">Search</button></Link>
                    </form>
            </div>
        </>
    )
}