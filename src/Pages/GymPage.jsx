import React from 'react';
import { useParams } from 'react-router-dom';
import GymExercises from "../Components/GymExercises";

const GymPage = () => {
  const { category } = useParams();
  console.log("Category in GymPage: ", category); // Log the category

  return (
    <>
      <div className='SpecificGym'>
        <h1>{category ? `${category} Exercises` : 'All Gym Exercises'}</h1>
        <GymExercises category={category} />
      </div>
    </>
  );
}

export default GymPage;
