import { Route, Routes } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar";
import Navbar from "../Components/Navbar";
import ToggleNavbar from "../Components/ToggleNavbar";
import AboutUs from "./AboutUs";
import WorkoutsPage from "./Workouts";
import GymPage from "./GymPage";
import BodyWeightPage from "./BodyWeight";

const HomePage = () => {

    return (
        <>

            <Navbar />
            <MainNavbar />
            <ToggleNavbar />
            <ul>
                <img src="src/assets/Strong_Dobby.png" alt="Gym-Dobby" />
                <img src="src/assets/Bellatrix.png" alt="Strong-Bellatrix" />
            </ul>

            <Routes>
                <Route path="/workouts/bodyweight" element={<BodyWeightPage />} />
                <Route path="/workouts/gym" element={<GymPage />} />
                <Route path="/workouts" element={<WorkoutsPage />} />
                <Route path="/about-us" element={<AboutUs />} />

            </Routes>

        </>
    );
}



export default HomePage;