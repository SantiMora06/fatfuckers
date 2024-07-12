import React from 'react';

const DeleteHandler = ({ id, onDelete }) => {
    const handleDelete = () => {
        
        if (window.confirm('Are you sure you want to delete this exercise?')) {
            onDelete(id);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteHandler;
