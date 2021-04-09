import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import { Link } from 'react-router-dom';


const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(res => setPet(res))

    }, []);

    const onPetButtonClickHandler =()=>{
        let incrementedLikes=pet.likes+1
        petService.pet(match.params.petId,incrementedLikes)  
            .then((updatedPet)=>{
                setPet(state=>({...state,likes:Number(updatedPet.likes)}))
            })  
    }
    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} 
           <button className="button" onClick={onPetButtonClickHandler}>
                <i className="fas fa-heart"></i>
                    Pet
                    </button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}>< button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
            </div>
        </section>
    )
}
export default PetDetails;