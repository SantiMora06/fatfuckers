import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DeleteHandler from './DeleteHandler'; // Import DeleteHandler

const GymExercises = () => {
  const { category } = useParams();
  const [gymEx, setGymEx] = useState([]);

  const fetchAllGymEx = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts`);
      if (response.ok) {
        const gymData = await response.json();
        console.log("Fetched data: ", gymData); // Log fetched data
        setGymEx(gymData);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchAllGymEx();
  }, []);

  console.log("Current category: ", category); // Log current category
  console.log("Gym exercises: ", gymEx); // Log gym exercises

  const normalizedCategory = category ? category.toLowerCase() : null; // Added normalization

  const filteredExercises = normalizedCategory
    ? gymEx.filter(
        (exercise) =>
          exercise.isGym &&
          exercise.category.toLowerCase() === normalizedCategory // Use normalized category for comparison
      )
    : gymEx.filter((exercise) => exercise.isGym);

  console.log("Filtered exercises: ", filteredExercises); // Log filtered exercises

  // Added handleDelete function
  const handleDelete = (id) => {
    setGymEx((prevExercises) => prevExercises.filter(exercise => exercise.id !== id));
  };

  return (
    <section>
      <ul>
        {filteredExercises.map((currentExercise) => (
          <div key={currentExercise.id}>
            <Link
              to={`/workouts/gym/${currentExercise.category}/${currentExercise.id}`}
            >
              <li className="card">
                <img
                  src={currentExercise.picture}
                  alt={currentExercise.exercise}
                />
                <div>
                  <h3>{currentExercise.exercise}</h3>
                  <p className="content">{currentExercise.category}</p>
                  <p className="content">{currentExercise.description}</p>
                </div>
              </li>
            </Link>
            <DeleteHandler id={currentExercise.id} onDelete={handleDelete} /> {/* Added delete handler */}
            
          </div>
        ))}
      </ul>
    </section>
  );
};

export default GymExercises;
