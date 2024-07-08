import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
         
            <Link to="/"><li>Home</li></Link>
            <li> LOGO </li>
            <Link to="/about-us"> <li>About us</li></Link>
            
        </nav>
     );
}
 
export default Navbar;