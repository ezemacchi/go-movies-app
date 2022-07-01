import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='col-md-2'>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to='/movies'>Movies</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to='/by-category'>Categories</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to='/admin'>Manage Catalogue</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;