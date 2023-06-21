// https://jsonplaceholder.typicode.com/albums

import { useEffect, useState } from "react";


function App(){
    const[data,setData]=useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res)=>{
         return res.json()
         })
         .then((resp)=>{
            console.log(resp)
            setData(resp.data)
         })
    })
    return(
        <div>
            <h3>fetch data from backend</h3>
            <table>
              <thead>
                <tr>
                    <th>userId</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item)=>(
                <tr>
                <td>{item.userId}</td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                   ))}
              </tbody>
            </table>
        </div>
    )
}
export default App;