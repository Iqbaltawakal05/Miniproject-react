// ---- React Router DOM ----
import { Link } from "react-router-dom"
// ---- Css ----
import "./Card.css"

const Card = ({ item }) => {

    return (
        <div className="card-container" data-aos="fade-up">
            <div className="card">
            <img src={item.avatar} alt=""/>
            <h1>{item.first_name} {item.last_name}</h1>
            <p>{item.email}</p>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="card-button">
            <Link to={`/${item.id}`}>
                <button><i class="bi bi-person"></i> Profile</button>
            </Link>
                <button><i class="bi bi-trash"></i> delete</button>
            </div>
            </div>
        </div>
    )
}

export default Card