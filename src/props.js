// props-->properties
// to pass the information from one component to another
// declare-->{}
// props are immutable--we cant change
function App(props){
    let data="helo"
    let x="good morning"
  return(
    <div>
        <h2>functional components {data}</h2>
        <App1 value={data} send={x}>

        </App1>
    </div>
  )
}
function App1(props){
    const{value,send}=props
    return(
        <div>
         <h2>Child component {value} and{send}</h2>
         <App2 data={value} y={send}></App2>
        </div>
    )
}
function App2(props){
    const {data,y}=props
    return(
        <div>
         <h2> nth Child component{data}{y}</h2>
        </div>
    )
}
export default App;