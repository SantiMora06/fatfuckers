import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
         
            <Link to="/"><li>Home</li></Link>
            <li> LOGO </li>
            <li>About us</li>
            
        </nav>
     );
}
 
export default Navbar;