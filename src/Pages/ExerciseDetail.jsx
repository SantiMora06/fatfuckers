
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../helpers/API_URL";

const ExerciseDetails = () => {
    const {category, id} = useParams();
    const [exercise, setExercise] = useState(null);
    useEffect(() => {
        const fetchExerciseDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/workouts`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched data:', data); // Log fetched data
                    const ExerciseDetail = data.find(exercise => exercise.id === parseInt(id));
                    console.log('Exercise detail:', ExerciseDetail); // Log found exercise
                    setExercise(ExerciseDetail);
                } else {
                    console.log ("Error Fetching Details")
                }

            } catch(error) {
                    console.log(error)
            }
        }
        fetchExerciseDetails();
    }, [id])

    if (!exercise) { // Conditional check for exercise being null
        return <div>Loading...</div>;
      }
    return (  
<div>
<h1>{exercise.exercise}</h1>
      <img src={exercise.picture} alt={exercise.exercise} />
      <p>Description: {exercise.description}</p>
      <p>Category: {exercise.category}</p>
      <p>ID: {id}</p>
</div>

    );
}
 
export default ExerciseDetails;