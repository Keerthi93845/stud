import {Link} from "react-router-dom"
function About(){
    return(
        <div>
            <h3>About Page</h3>
           <p>
            <Link to="/home">  
            click to back
            </Link>
            </p>
        </div>
    )
}
export default About;