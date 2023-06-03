import "./Competence.scss"
import Customer from "../../assets/man-on-the-chair.png"

const Competence=()=> {
    return <div className="competence">
        <div className="cultural__competence">
            <h2 className="approach">How we do it</h2>
            <h3 className="cultural__approach">Violet is the first to standardize cultural competence.</h3>
            <p className="competence__description">By translating decades worth of research, we’ve identified the core elements of cultural competence. This clinically-measured framework allows us to objectively benchmark providers across the industry.</p>
            <p className="competence__description">Now, we can better understand as an industry how we’re doing and provide a baseline for education and improvement.</p>
        </div>
        <img src={Customer} alt="customer" width="550px" height="476"/>
    </div>
}

export default Competence