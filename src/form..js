import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App(){
    return(
        <div>
          <Router>
            <Routes>
               <Route path="/" element={<Register/>}></Route>
               <Route path="Login" element={<Login/>}></Route>
            </Routes>
          </Router>
        </div>
    )
}
export default App;