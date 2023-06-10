import React from 'react';
import "./NavbarStyle.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink exact activeClassName="active-css" className="custom-css-navbar" to='/travel-india'>Home</NavLink>
            <NavLink activeClassName="active-css" className="custom-css-navbar" to='/about'>About</NavLink>
            <NavLink activeClassName="active-css" className="custom-css-navbar" to='/contact'>Contact</NavLink>
            <NavLink activeClassName="active-css" className="custom-css-navbar" to='/musicplaylist'>Music</NavLink>
        </nav>
    );
}

export default Navbar;