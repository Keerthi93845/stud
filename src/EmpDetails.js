import { Link, useParams } from "react-router-dom"
import "./Details.css"
import { useState,useEffect } from "react"

function EmpDetails() {
    const  [data,setData]=useState(null)
     const {empid}=useParams()
    useEffect(()=>{
        fetch("https://json-rest-api-dyms.onrender.com/Student/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.log(resp)
            setData(resp)
        })
         
    },[])
    return (
        <div className="container-fluid" >
            <div className="card" style={{width: "18rem"}}>
                {data &&
                <div className="card-body">
                    <h5 className="card-title">Emp Id:{data.id}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Emp Name:{data.name}</h6>
                    <p className="card-text">city:{data.city}</p>
                    <p className="card-text">mobile:{data.mobile}</p>
                    {/* <a href="#" className="card-link"></a> */}
                   <Link to="/emplist" className="btn btn-danger">Back</Link>
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
}
            </div>
        </div>
    )
}
export default EmpDetails;