// states-->pass the information in the same component
// declare{}
// states are mutable object



// types of states
// 1. constructor
// 2.without constructor method

import React from "react";
class App extends React.Component{
    constructor(){
        super()
        this.state={
            id:1,
            name:"keerthi",
            mobile:9876543223,
            count:0,
            value:""
        }
    }
    change=()=>{
        this.setState({
            id:2,
            name:"Aishu",
            mobile:9876543236
        })
    }
    inc=()=>{
        this.setState({
            count:this.state.count + 1
        })
        
    }
    dec=()=>{
        this.setState({
            count:this.state.count - 1
        })
    }
    reset=()=>{
        this.setState({
            count:0
        })
        
    }
    getData=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
   

    render(){
        return(
            <div>
                <h1>Constructor component</h1>
              
                <p>
                ID:{this.state.id}<br/>
                Name:{this.state.name}<br/>
                Mobile:{this.state.mobile}<br/>
            </p>
            <button onClick={this.change}>Update</button>
            <br></br>
            <br></br>
            <h4>count:{this.state.count}</h4>
            <button onClick={this.inc}>Inc</button>
            <button onClick={this.dec}>Dec</button>
            <button onClick={this.reset}>reset</button>
            <br/><br/>
            <input type="text" onChange={this.getData}></input>
            <p>current user input value:{this.state.value}</p>
                <App1 count={this.state.count} value={this.state.id} name={this.state.name} mobile={this.state.mobile}></App1>
            </div>
        )
    }
}
export default App;
  class App1 extends React.Component{
    render(){
        return(
          <div>
            <h1>child components</h1>
            <h3>{this.props.count}</h3>
            <p>
                ID:{this.props.value}<br/>
                Name:{this.props.name}<br/>
                Mobile:{this.props.mobile}<br/>
            </p>
          </div>
                    )
                    }
                    }