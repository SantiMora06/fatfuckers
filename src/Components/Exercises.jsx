import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../helpers/API_URL";


const Exercises = () => {

    const [exercise, setExercise] = useState([])

const fetchAllExercises = async() =>{

    try {
        const response = await fetch(`${API_URL}`)
        if(response.ok){
        const exercisesData = await response.json();
        setExercise(exercisesData)
    }
    } catch (error) {
        console.log(error)
    }
}

useEffect(() =>{
    fetchAllExercises();
}, [])

    return ( 
        <>
        <section>
            <ul>
                {exercise.map((currentExercise) => (
                    <Link to={`/workouts/${currentExercise.id}}`} key={currentExercise.id}>
                      <li
                        className='card'>
                        <img
                          src={currentExercise.picture}
                          alt={currentExercise.exercise}
                        />
                        <h3>{currentExercise.exercise}</h3>{" "}
                        <p className='content'>{currentExercise.category}</p>{" "}
                        <p className='content'>{currentExercise.description}</p>
                      </li>
                    </Link>
                 ))} 
            </ul>
        </section>
        </>
     );
}
 
export default Exercises;