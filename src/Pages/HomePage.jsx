import { Route, Routes } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar";
import Navbar from "../Components/Navbar";
import ToggleNavbar from "../Components/ToggleNavbar";
import AboutUs from "./AboutUs";
import Workouts from "./Workouts";
import GymPage from "./GymPage";
import BodyWeightPage from "./BodyWeightPage";
<<<<<<< Updated upstream
=======
import IntroCard from "./IntroCards";
import ExerciseDetails from "./ExerciseDetail";
>>>>>>> Stashed changes

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
        <Route path="/workouts/bodyweight/:category" element={<BodyWeightPage />} />
        <Route path="/workouts/bodyweight/:category/:id" element={<ExerciseDetails />} />
        <Route path="/workouts/gym/:category" element={<GymPage />} />
        <Route path="/workouts/gym" element={<GymPage />} />{" "}
        <Route path="/workouts/gym/:category/:id" element={<ExerciseDetails />} />
        {/* Add this route to match /workouts/gym */}
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:category" element={<Workouts />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default HomePage;
