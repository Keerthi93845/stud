import { useState } from "react";
import { useEffect } from "react";

function App(){
const[count,setCount]=useState(0)
useEffect(()=>{
        setTimeout(() => {
           setCount(count+1) 
        }, 2000);
    })

   

    return(
        <div>
            <h3>00:00:00</h3>
            <button>start</button>
            <button>stop</button>
            <button>Reset</button>
            <p>count:{count}</p>
        </div>
        
    )
}
export default App;