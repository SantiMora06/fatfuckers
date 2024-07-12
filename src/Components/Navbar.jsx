import { Link } from "react-router-dom";
import  Logo  from "../assets/LOGO_U.png"


const Navbar = () => {
    return (
        <nav>

            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li><img src="src/assets/LOGO_U.png" alt="FatFuckers Logo" /></li></Link>
            <Link to="/about-us"> <li>About us</li></Link>

        </nav>
    );
}

export default Navbar;