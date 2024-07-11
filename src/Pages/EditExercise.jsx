import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../Components/EditForm";

const EditExercise = () => {
    const { id } = useParams();
    const [currentExercise, setCurrentExercise] = useState(null);

    useEffect(() => {
        const fetchExercise = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCurrentExercise(data);
                } else {
                    throw new Error("Failed to fetch exercise data");
                }
            } catch (error) {
                console.log("error:", error);
            }
        };

        fetchExercise();
    }, [id]);

    if (!currentExercise) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Edit Exercise</h2>
            <EditForm currentExercise={currentExercise} />
        </div>
    );
}

export default EditExercise;
