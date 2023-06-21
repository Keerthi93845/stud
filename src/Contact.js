import { useNavigate } from "react-router-dom";

function Contact(){
    let navigate=useNavigate()
    return(
        <div>
            <h3>Contact Page</h3>
            <button>Click To Back</button>
        </div>
    )
}
export default Contact;