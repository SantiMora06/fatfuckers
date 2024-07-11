import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BodyExercises = () => {
  const { category } = useParams();
  const [bodyEx, setBodyEx] = useState([]);

  const fetchAllBodyEx = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts`);
      if (response.ok) {
        const bodyData = await response.json();
        console.log("Fetched data: ", bodyData); // Log fetched data
        setBodyEx(bodyData);
      } else {
        console.log("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBodyEx();
  }, []);

  console.log("Current category: ", category); // Log current category
  console.log("Gym exercises: ", bodyEx); // Log gym exercises

  const normalizedCategory = category ? category.toLowerCase() : null; // Added normalization

  const filteredExercises = normalizedCategory
    ? bodyEx.filter(
      (exercise) =>
        !exercise.isGym &&
        exercise.category.toLowerCase() === normalizedCategory // Use normalized category for comparison
    )
    : bodyEx.filter((exercise) => !exercise.isGym);

  console.log("Filtered exercises: ", filteredExercises); // Log filtered exercises

  return (
    <section>
      <ul>
        {filteredExercises.map((currentExercise) => (
          <Link
            to={`/workouts/bodyweight/${currentExercise.category}/${currentExercise.id}`}
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
        ))}
      </ul>
    </section>
  );
};
export default BodyExercises;
