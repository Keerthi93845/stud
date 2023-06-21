import React from "react"
class App1 extends React.Component{

    render(){
        const{id,user,firstname,city}=this.props
        return(
            <div>
                <h1>Lokesh</h1>
                <p>id:{id}</p>
                <p>user:{user}</p>
                <p>firstname:{fname}</p>
                <p> city:{city}</p>
            </div>
        )
    }
}