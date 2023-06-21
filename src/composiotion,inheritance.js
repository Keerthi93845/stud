// composition--combining 1 component & another component
    //   it converts in to new component
    // Inheritance-- 1 class is derived from the another claaa[class components]


//  import Data from "./Data.js"
//     function App(){
//         return(
//             <div>
//                 <h1>Composition method</h1>
//                 <App1></App1>
//                 <App2></App2>
//                 <Data></Data>
//             </div>
//         )
//     }
   
//     function App1(){
//         return(
//             <div>
//                 <button>Read more</button>
//             </div>
//         )
//     }


//     function App2(){
//         return(
//             <div>
//                 <button>click</button>
//             </div>
//         )
//     }
//     export default App;
import React from "react"
class App extends React.Component{
    render(){
    return(
   <div>

    <h1>Class based components</h1>
   </div>
    )
}
}
class App1 extends App{
    render(){
        const parent=super.render()
    return(
   <div>
 {parent}
    <h1>parent components</h1>
   </div>
    )
}
}
class App2 extends App1{
    render(){
        const parent=super.render()
    return(
   <div>
 {parent}
    <h1>Child components</h1>
   </div>
    )
}
}
export default App2;