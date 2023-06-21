import React from "react";
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            user:"",
            email:"",
            pswd:""

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
    submitForm=()=>{
      let x= localStorage.getItem("user")
      let y= localStorage.getItem("email")
      let z= localStorage.getItem("password")
        if(this.state.user !=x ||this.state.email !=y || this.state.pswd !=z){
        alert("check the credentails")
        }
        else{
            alert("logged in!!...")
        }
    }
    render(){
        return(
            <div>
                <h2>Login in</h2>
                <form onSubmit={this.submitForm}>
                   <label>Username:</label>
                    <input value={this.state.user} type="text" required onChange={this.updateUser}></input>
                    <br></br><br></br>
                    <label>Email:</label>
                    <input  value={this.state.email} type="Email" required onChange={this.updateEmail}></input>
                    <br></br><br></br>
                    <label>Password</label>
                    <input value={this.state.pswd} type="Password" required  onChange={this.updatePassword}></input>
                    <br></br><br></br>
                    <input type="submit" value="login"></input>
                </form>
            </div>
        )
    }
}
export default Login;