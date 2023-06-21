import { useState } from "react";
function App(){
    const [data,setData]=useState("React js")
    const [count,setCount]=useState(0)

    const change=()=>{
        setData("hello")
    }
    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div>
            <h3>Hooks Methods{data} </h3>
            <Data value={data} count={count}></Data>
            <button onClick={change}>update</button>
            <br></br>
            <br></br>
            <p>count:{count}</p>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


function Data(props){
    const{value,count}=props
    return(
        <div>
            <h3>Child component</h3>
            <p>we are learning hooks {value}</p>
            <h2>{count}</h2>
        </div>
    )
}
export default App;