import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <ul className='list-group'>
            <li className='list-group-item'>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className='list-group-item'>
                <NavLink to='/movies'>Movies</NavLink>
            </li>
            <li className='list-group-item'>
                <NavLink to='/genres'>Genres</NavLink>
            </li>
            <li className='list-group-item'>
                <NavLink to='/admin'>Manage Catalogue</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;