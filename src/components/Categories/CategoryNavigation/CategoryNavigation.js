import { NavLink } from 'react-router-dom';
const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/all">Cats</NavLink></li>
                <li><NavLink to="/categories/all">Dogs</NavLink></li>
                <li><NavLink to="/categories/all">Parrots</NavLink></li>
                <li><NavLink to="/categories/all">Reptiles</NavLink></li>
                <li><NavLink to="/categories/all">Other</NavLink></li>
            </ul>
            <style jsx>{`
            .active{
                background-color:lightgreen !important;
            }
            `}</style>
        </nav>
    )
}

export default CategoryNavigation;