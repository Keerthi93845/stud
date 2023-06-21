import { useState } from "react"
import {useNavigate } from "react-router-dom"
function Register() {
    const [user,setUser]=useState("")
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")
    const [cpswd,setcpswd]=useState("")
  
  const changeUser=(e)=>{
    setUser(e.target.value)
  }
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changePswd=(e)=>{
    setPswd(e.target.value)
  }
  const changeCpswd=(e)=>{
    setcpswd(e.target.value)
  }
  const navigate=useNavigate()
  const submitData=()=>{
    if(user.length<=5){
    alert("user should be enter > 5 characters")
    
  }
  else if(pswd!= cpswd){
    alert("password does not match..!")

  }
  else{
    alert("form successfully submitted")
    navigate("/Login")
  }
}
    return (
        <div>
            <form onSubmit={submitData}>
                <label>Username:</label>
                <input value={user} type="text" required onChange={changeUser} ></input>
                <br></br><br></br>
                <label>Email:</label>
                <input value={email}type="Email" required onChange={changeEmail}></input>
                <br></br><br></br>
                <label>Password</label>
                <input value={pswd} type="Password" required onChange={changePswd} ></input>
                <br></br><br></br>
                <label>confirm Password</label>
                <input value={cpswd} type="Password" required onChange={changeCpswd}></input>
                <input type="submit" value="Register"></input>
            </form>
        </div>
    )
}
export default Register;