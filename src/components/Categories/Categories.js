import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet'





class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
        }

    }

    componentDidMount() {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(res => this.setState({ pets: res }))
            .catch(err => console.log(err));
    }
    // const [pets, setPets] = useState([]);
    /*    useEffect(() => {
           fetch('http://localhost:5000/pets')
               .then(res => res.json())
               .then(res => setPets(res))
       }, []) */

    render() {
        return (
            <div className="dashboard" >
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet 
                        key={x.id} 
                        {...x}
                        />
                    )}


                </ul>
            </div>
        )
    }
}


export default Categories