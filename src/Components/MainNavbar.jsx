import { Link } from "react-router-dom";
import WorkoutsPage from "../Pages/Workouts";

const MainNavbar = () => {
    return ( 
        <ul className="MainNavbar">
            <Link to="/workouts"><li>WORKOUTS</li></Link>
            </ul>
     );
}
 
export default MainNavbar;