// import { Navigate } from "react-router-dom";
import Login from "./Login";
import React from "react";
// import { Link } from "react-router-dom";


class App extends React.Component{
    constructor(){
        super()
        this.state={
            user:"",
            email:"",
            pswd:"",
            cpswd:""

        }
    }

    updateUser=(e)=>{
        console.log(e.target.value)
        this.setState({
            user:e.target.value
        })
    }
    updateEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    updatePassword=(e)=>{
        this.setState({
            pswd:e.target.value
        })
    }
    updateCpassword=(e)=>{
        this.setState({
            cpswd:e.target.value
        })
    }
   
   submitData=(e)=>{
    e.preventDefault()
    if(this.state.user.length<5){
        alert("user should be>5 characters")
 }
  
    else if(this.state.pswd != this.state.cpswd){
        alert("password does not match...!")
    }
    else{
        alert ("form is successfully submitted")
        //  Navigate("/home")
        this.storeData()
      
    }
}

//      errorData=(e)=>{  Navigate("/home")
//     e.preventDefault()
//     console.log(this.user.value)
//     let uservalue=this.user.value
//     let pattern=/^[A-Z]?[a-z]+[0-9]+[!@#$%^&*()]+$/
   
//     if(pattern.test(this.state.uservalue)){
//         console.log("i am passed")
//         text.innerHTML="UserName is valid"
//         text.style.color="green"
//     }
//     else if(this.state.input.value==""){
       
//         text.innerHTML=""
 
//     }
   
//     else{
//         console.log("i am failed")
//         text.innerHTML="Username is invalid"
//         text.style.color="red"
//     }
// }
  

    
    storeData=()=>{
    localStorage.setItem("user",this.state.user)
    localStorage.setItem("email",this.state.email)
    localStorage.setItem("password",this.state.pswd)
   }

    render(){
        return(
            <div>
                <h2>Registration

                </h2>
                <p>
            <Link to="/home">  
            click to back
            </Link>
            </p>
                <form onSubmit={this.submitData}>
                    <label>Username:</label>
                    <input value={this.state.user} type="text" required onChange={this.updateUser}></input>
                    <br></br><br></br>
                    <label>Email:</label>
                    <input  value={this.state.email} type="Email" required onChange={this.updateEmail}></input>
                    <br></br><br></br>
                    <label>Password</label>
                    <input value={this.state.pswd} type="Password" required  onChange={this.updatePassword}></input>
                    <br></br><br></br>
                    <label>confirm Password</label>
                    <input value={this.state.cpswd} type="Password"required onChange={this.updateCpassword}></input>
                    <input type="submit" value="Register"></input>
                </form>
               <Login></Login>
            </div>
        )
    }
}
export default App;