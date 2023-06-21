import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import EmpList from "./EmpList";
import EmpForm from "./EmpForm";
import EmpEdit from "./Empedit";
import EmpDetails from "./EmpDetails";
import Login1 from "./login1";
import Register from "./Register.";


function Data(){
    return(
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Register/>}/>
              <Route path="/login1" element={<Login1/>}/>
                <Route path="/emplist" element={<EmpList/>}/>
                <Route path="/form" element={<EmpForm/>}/>
                <Route path="/empedit/:empid" element={<EmpEdit/>}/>
                <Route path="/empdetails/:empid" element={<EmpDetails/>}/>

            </Routes>
          </Router>
        </div>
    )
}
export default Data;