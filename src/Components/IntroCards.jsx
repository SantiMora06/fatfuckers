import { Link } from "react-router-dom";


const IntroCard = () => {
    return (
        <div className="entryCards">
            <div className="gymCard">
                <Link to="/workouts/gym"><button type="button">GYM</button></Link>
            </div>
            <div className="bodyCard">
                <Link to="/workouts/bodyweight"><button type="button">BODYWEIGHT</button></Link>
            </div>
        </div>
    );
}

export default IntroCard;