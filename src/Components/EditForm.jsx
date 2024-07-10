import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditForm({ currentExercise }) {
    const [exercise, setExercise] = useState("");
    const [category, setCategory] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const [isGym, setIsGym] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentExercise) {
            setExercise(currentExercise.exercise);
            setCategory(currentExercise.category);
            setPicture(currentExercise.picture);
            setDescription(currentExercise.description);
            setIsGym(currentExercise.isGym);
        }
    }, [currentExercise]);

    const handleExerciseInput = (event) => setExercise(event.target.value);
    const handleCategoryInput = (event) => setCategory(event.target.value);
    const handlePictureInput = (event) => setPicture(event.target.value);
    const handleDescriptionInput = (event) => setDescription(event.target.value)
    const handleIsGym = (event) => setIsGym(event.target.checked)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedExercise = { id: currentExercise.id, exercise, category, picture, description, isGym };
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts/${currentExercise.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedExercise),
            });
            if (!response.ok) {
                throw new Error("Failed to update exercise");
            } else {
                alert("Exercise updated successfully");

                const type = isGym ? 'gym' : 'bodyweight';
                const categoryLowerCase = category.toLowerCase();
                navigate(`/workouts/${type}/${categoryLowerCase}/${currentExercise.id}`);
            }
        } catch (error) {
            console.log("error:", error);
        }
    }

    return (
        <div className="EditExercise">
            <h3>Edit Exercise</h3>

            <form onSubmit={handleSubmit}>
                <label>Exercise: </label>
                <input
                    type="text"
                    name="exercise"
                    value={exercise}
                    onChange={handleExerciseInput}
                />

                <label>Category: </label>
                <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={handleCategoryInput}
                />

                <label>Picture: </label>
                <input
                    type="url"
                    name="picture"
                    value={picture}
                    onChange={handlePictureInput}
                />

                <label>Description: </label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleDescriptionInput}
                />

                <label>Gym exercise? </label>
                <input
                    type="checkbox"
                    name="isGym"
                    checked={isGym}
                    onChange={handleIsGym}
                />

                <button type="submit">Update Exercise</button>
            </form>
        </div>
    );
}

export default EditForm;
