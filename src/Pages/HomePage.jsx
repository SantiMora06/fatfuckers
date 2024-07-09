import { Route, Routes } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar";
import Navbar from "../Components/Navbar";
import ToggleNavbar from "../Components/ToggleNavbar";
import AboutUs from "./AboutUs";
import Workouts from "./Workouts";
import GymPage from "./GymPage";
import BodyWeightPage from "./BodyWeightPage";
import IntroCard from "./IntroCards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainNavbar />
      <ToggleNavbar />
      <IntroCard />

      <Routes>
        <Route path="/workouts/bodyweight" element={<BodyWeightPage />} />
        <Route path="/workouts/bodyweight/:category" element={<BodyWeightPage />} />
        <Route path="/workouts/gym/:category" element={<GymPage />} />
        <Route path="/workouts/gym" element={<GymPage />} />{" "}
        {/* Add this route to match /workouts/gym */}
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default HomePage;
