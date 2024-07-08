import { useEffect, useState } from "react";
import API_URL from "../helpers/API_URL";
import GymEx from "../Components/GymEx";


const GymPage = () => {

    
   const [gymEx, setGymEx] = useState([])



   const fetchAllGymEx = async() => {

    try {
          const response = await fetch(`${API_URL}/`)
          if(response.ok){
            const gymData = await response.json()
            setGymEx(gymData)
          }
    } catch (error) {
        console.log(error)
    }
   }


   useEffect(()=>{
    fetchAllGymEx()
   }, [])

   return (
    
   
<>

<h1>HWY RHWE</h1>

  <GymEx/>
    </>
     );
}
 
export default GymPage;