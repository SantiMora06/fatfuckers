import { Link } from "react-router-dom";

const MainNavbar = () => {
    return (
        <ul className="MainNavbar">
            <Link to="/workouts"><li>WORKOUTS</li></Link>
        </ul>
    );
}

export default MainNavbar;