import { Link } from 'react-router-dom';
import * as petService from '../../services/petService';

const Pet = ({
    id,
    name,
    description,
    imageURL,
    category,
    likes,
    onPetButtonClickHandler

}) => {

    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={imageURL} /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <button className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i>
                    Pet
                    </button>
                <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span>{likes}</span>
            </div>
        </li>
    )
}
export default Pet;