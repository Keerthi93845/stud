import { useState } from "react";

    
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"
import { useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";


function Register(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")
    const [cpswd,setCpswd]=useState("")
    const navigate=useNavigate()
    useNavigate("/login1")



const firebaseConfig = {
  apiKey: "AIzaSyBWEXHKsMMVxkOX1SEcPm-3QLJ59XMw994",
  authDomain: "auth-ac67d.firebaseapp.com",
  projectId: "auth-ac67d",
  storageBucket: "auth-ac67d.appspot.com",
  messagingSenderId: "58450166958",
  appId: "1:58450166958:web:86b5fd06e220d6e14f993f",
  measurementId: "G-05Z5JH23RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

const store=(e)=>{
    e.preventDefault()
    if(name==""|| email==""||  pswd=="" || cpswd==""){
      alert("All Fields Are Mandatory")
    }
    else if(pswd != cpswd){
      alert("Password Does Not Match")
    }
    else{
      alert("Successfully Registered")
    }

  
    let obj={
        a:email,
        b:pswd
    }
   createUserWithEmailAndPassword(auth,obj.a,obj.b)
   
    .then(()=>{
        alert("Register successfully")
        navigate("/login1")
    })
    .catch((err)=>{
        alert(err)
    })
}

    return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={store} className="card p-3 m-3" style={{width:"400px",backgroundColor:"lavender",fontSize:"25px"}}> 
   <div className="mb-3">
    <label  className="form-label">Name</label>
    <input value={name} onChange={e=>setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div> 

  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input value={pswd} onChange={e=>setPswd(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
   <div className="mb-3">
    <label  className="form-label"> Confirm Password</label>
    <input value={cpswd} onChange={e=>setCpswd(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div> 
  
  <button type="submit" className="btn btn-primary"  style={{fontSize:"33px"}}>Register</button>
</form>

        </div>
    )


    }

export default Register;