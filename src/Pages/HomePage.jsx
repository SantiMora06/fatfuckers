import { Routes } from "react-router-dom";
import Exercises from "../Components/Exercises";
import MainNavbar from "../Components/MainNavbar";
import Navbar from "../Components/Navbar";
import ToggleNavbar from "../Components/ToggleNavbar";

const HomePage = () => {

    return ( 
        <>
    
        <Navbar/>
        <MainNavbar/>
        <ToggleNavbar/>
        <Exercises/>

        </>
     );
}


 
export default HomePage;