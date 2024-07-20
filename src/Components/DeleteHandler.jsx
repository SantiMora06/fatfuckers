import React, { useEffect } from 'react';

const DeleteHandler = ({ id, onDelete }) => {
    const handleDelete = () => {

        if (window.confirm('Are you sure you want to delete this exercise?')) {
            onDelete(id);
        }


    };


    useEffect(() => {
        deleteExercise()
    })

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteHandler;
