import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API_URL from "../helpers/API_URL";

const Exercises = () => {
  const { category } = useParams();
  const [exercise, setExercise] = useState([]);

  // Added state for checkboxes
  const [isGymChecked, setIsGymChecked] = useState(true);
  const [isBodyweightChecked, setIsBodyweightChecked] = useState(true);

  // Added handlers for checkboxes
  const handleGymChange = () => {
    setIsGymChecked(!isGymChecked);
  };

  const handleBodyweightChange = () => {
    setIsBodyweightChecked(!isBodyweightChecked);
  };

  const fetchAllExercises = async () => {
    try {
      const response = await fetch(`${API_URL}/workouts`);
      if (response.ok) {
        const exercisesData = await response.json();
        const filteredExercises = category
          ? exercisesData.filter(
              (exercise) =>
                exercise.category.toLowerCase() === category.toLowerCase()
            )
          : exercisesData;
        setExercise(filteredExercises);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllExercises();
  }, [category]);

  return (
    <>
      <section>
        {category && ( // Corrected checkboxes rendering
          <div>
            <label>
              <input
                type="checkbox"
                checked={isGymChecked}
                onChange={handleGymChange}
              />
              Gym
            </label>
            <label>
              <input
                type="checkbox"
                checked={isBodyweightChecked}
                onChange={handleBodyweightChange}
              />
              Bodyweight
            </label>
          </div>
        )}
        <ul>
          {exercise.map((currentExercise) => {
            const type = currentExercise.isGym ? "gym" : "bodyweight"; // Determine the type
            const categoryLowerCase = category
              ? category.toLowerCase()
              : currentExercise.category.toLowerCase();

            // Filter based on checkboxes
            if (
              (isGymChecked && currentExercise.isGym) ||
              (isBodyweightChecked && !currentExercise.isGym)
            ) {
              return (
                <Link
                  to={`/workouts/${type}/${categoryLowerCase}/${currentExercise.id}`} // Updated the Link URL
                  key={currentExercise.id}
                >
                  <li className="card">
                    <img
                      src={currentExercise.picture}
                      alt={currentExercise.exercise}
                    />
                    <h3>{currentExercise.exercise}</h3>
                    <p className="content">{currentExercise.category}</p>
                    <p className="content">{currentExercise.description}</p>
                  </li>
                </Link>
              );
            }

            return null;
          })}
        </ul>
      </section>
    </>
  );
};

export default Exercises;
