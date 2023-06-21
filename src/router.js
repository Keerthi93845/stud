import "./index.css"
import Home from "./Home"
import About from "./About"
// import Contact from "./contact"
import Login from "./Login"

import { BrowserRouter as Router,Routes,Route,Link, Form } from"react-router-dom"
function App(){
    return(
        <div>
        <Router>
        <ul>
            <li>
               <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/app">App</Link>
            </li>

         </ul>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" elements={<Login/>}/>
            <Route path="/app" elements={<App/>}/>
        </Routes>
        </Router>
        </div>
    )
}
export default App;