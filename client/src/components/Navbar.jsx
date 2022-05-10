import {Link} from "react-router-dom";
import "../assets/styles/style.css"
const Navbar = ()=>{
return(
    <>
             <div className="navbar_mobile">
                <Link to="/"><h1 className='logo_name'>YouCar</h1></Link>
                
            </div>
    </>
)
}
export default Navbar ;