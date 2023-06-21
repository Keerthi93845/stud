// function App(props){
//     const {data,value,fname,city,country}=props
//     return(
//         <div>
        
//             <h1>parent component</h1>
//             <p>{data}</p>
//             <p>{value}</p>
//             <p>{fname}</p>
//             <p>{city}</p>
//             <p>{country}</p>
        
//         </div>
//     )
// }
// function App1(){
//     let a="good morning"
//     let b="Besant Technology"
//     return(
//         <div>
//             <h1>Child component</h1>
//            <App data={a} value={b} fname={"keerthi"} city={"banglore"} country={"india"}></App>
           
//         </div>
//     )
// }
// export default App1

// import React from "react";
// let a="Ramachandran"
// let b="Rukmini"
// let c="kiran"
// class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>keerthi</h1>
//                 <App1 data={a} value={b} num={c} state={"Hosur"}></App1>
//             </div>
//         )
//     }
// }
// class App1 extends React.Component{

//     render(){
//         const{data,value,num,state}=this.props
//         return(
//             <div>
//                 <h1>Lokesh</h1>
//                 <p>{data}</p>
//                 <p>{value}</p>
//                 <p>{num}</p>
//                 <p>{state}</p>
//             </div>
//         )
//     }
// }
// export default App;