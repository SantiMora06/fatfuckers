import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Form(props) {
    const [exercise, setExercise] = useState("");
    const [category, setCategory] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const [isGym, setIsGym] = useState(false)

    const handleExerciseInput = (event) => setExercise(event.target.value);
    const handleCategoryInput = (event) => setCategory(event.target.value);
    const handlePictureInput = (event) => setPicture(event.target.value);
    const handleDescriptionInput = (event) => setDescription(event.target.value)
    const handleIsGym = (event) => setIsGym(event.target.checked)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newId = uuidv4();
        const newExercise = { id: newId, exercise, category, picture, description, isGym }
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/workouts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newExercise),
            }); if (!response.ok) {
                throw new Error("No way to fetch that")
            } else {
                setExercise("")
                setCategory("")
                setDescription("")
                setPicture("")
                setIsGym("")
            }
        } catch (error) {
            console.log("error:", error)
        }
        alert("Congrats! An exercise has been added");
    }



    return (
        <div className="AddNewExercise">
            <h3>Add an exercise</h3>

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

                <button type="submit">Add an exercise</button>
            </form>
        </div>
    );
}

export default Form;