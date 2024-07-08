import { useState, useEffect } from "react"

const GymEx = () => {
    
   const [gymEx, setGymEx] = useState([])

   const fetchAllGymEx = async() => {

    try {
          const response = await fetch(`${API_URL}`)
          if(response.ok){
            const gymData = await response.json()
            setGymEx(gymData)
          }
    } catch (error) {
        console.log(error)
    }
   }

   useEffect(()=>{
    fetchAllGymEx()
   }, [])

   return (
<>
    
  <section>
      <ul>
        {gymEx
          .filter((currentExercise) => currentExercise.isGym)
          .map((currentExercise) => (
            <Link to={`workouts/gym/${currentExercise.id}`} key={currentExercise.id}>
              <li className='card'>
                <img src={currentExercise.picture} alt={currentExercise.exercise} />
                <h3>{currentExercise.exercise}</h3>
                <p className='content'>{currentExercise.category}</p>
                <p className='content'>{currentExercise.description}</p>
              </li>
            </Link>
          ))}
      </ul>
    </section>
    </>
     );
}
 
export default GymEx;