import React from 'react';
import { useParams } from 'react-router-dom';
import BodyExercises from "../Components/BodyExercises";


const BodyWeightPage = () => {
  const { category } = useParams();
  console.log("Category in GymPage: ", category)
  return (
    <>
      <section className="SpecificBody">
        <h1>{category ? `${category} Exercises` : 'All BodyWeight Exercises'}</h1>
        <BodyExercises category={category} />
      </section>
    </>
  );
}

export default BodyWeightPage;