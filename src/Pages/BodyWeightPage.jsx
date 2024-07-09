import React from 'react';
import { useParams } from 'react-router-dom';
import BodyExercises from "../Components/BodyExercises";


const BodyWeightPage = () => {
    const {category} = useParams();
    console.log("Category in GymPage: ", category)
    return (
        <>
          <h1>{category ? `${category} Exercises` : 'All BodyWeight Exercises'}</h1>
          <BodyExercises category={category} />
        </>
      );
}
 
export default BodyWeightPage;