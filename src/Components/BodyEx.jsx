const BodyExercises = () => {
 
    const [bodyEx, setBodyEx] = useState([])



    const fetchAllBodyEx = async() => {
 
     try {
           const response = await fetch(`${API_URL}/`)
           if(response.ok){
             const bodyData = await response.json()
             setGymEx(bodyData)
           }
     } catch (error) {
         console.log(error)
     }
    }
 
 
    useEffect(()=>{
     fetchAllBodyEx()
    }, [])
 
    return (
     
    
 <>
 
 <h1>HWY RHWE</h1>
 
 <Navbar/>
     <MainNavbar/>
     <ToggleNavbar/>
     
    <section>
       <ul>
         {gymEx
           .filter((currentExercise) => !currentExercise.isGym)
           .map((currentExercise) => (
             <Link to={`/workouts/bodyweight/${currentExercise.id}`} key={currentExercise.id}>
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
export default BodyExercises;