import { useEffect, useState } from "react"
import API_URL from "../helpers/API_URL"
import { Link } from "react-router-dom"


const BodyExercises = () => {
 
    const [bodyEx, setBodyEx] = useState([])



    const fetchAllBodyEx = async() => {
 
     try {
           const response = await fetch(`${API_URL}/workouts`)
           if(response.ok){
             const bodyData = await response.json()
             setBodyEx(bodyData)
           }
     } catch (error) {
         console.log(error)
     }
    }
 
 
    useEffect(()=>{
     fetchAllBodyEx()
    }, [])
 
    return (
     
    
 <>
 
 <h1>HWY RHWE</h1>

     
    <section>
       <ul>
         {bodyEx
           .filter((currentExercise) => !currentExercise.isGym)
           .map((currentExercise) => (
             <Link to={`/workouts/bodyweight/${currentExercise.id}`} key={currentExercise.id}>
               <li className='card'>
                 <img src={currentExercise.picture} alt={currentExercise.exercise} />
                 <h3>{currentExercise.exercise}</h3>
                 <p className='content'>{currentExercise.category}</p>
                 <p className='content'>{currentExercise.description}</p>
               </li>
             </Link>
           ))}
       </ul>
     </section>
     </>
      );
 }
export default BodyExercises;