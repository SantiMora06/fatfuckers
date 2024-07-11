import { Route, Routes } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar";
import Navbar from "../Components/Navbar";
import ToggleNavbar from "../Components/ToggleNavbar";
import AboutUs from "./AboutUs";
import Workouts from "./Workouts";
import GymPage from "./GymPage";
import BodyWeightPage from "./BodyWeightPage";
import IntroCard from "./IntroCards";
import ExerciseDetails from "./ExerciseDetail";
import AddExercise from "./AddExercise";
import EditExercise from "./EditExercise";



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
        <Route path="/workouts/bodyweight/:category/:id" element={<ExerciseDetails />} />
        <Route path="/workouts/gym/:category" element={<GymPage />} />
        <Route path="/workouts/gym" element={<GymPage />} />
        <Route path="/workouts/gym/:category/:id" element={<ExerciseDetails />} />
        <Route path="/workouts/:category" element={<Workouts />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/workouts/addexercise" element={<AddExercise />} />
        <Route path="/workouts/:id/edit" element={<EditExercise />} />
      </Routes>
    </>
  );
};

export default HomePage;

