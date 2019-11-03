import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav className="NavBar">
        <a>
            <Link to="/">Home</Link>
        </a>
        <a>
            <Link to="/bookings">Bookings</Link>
        </a>
        <a>
            <Link to="/customers">Customers</Link>
        </a>
    </nav>
);



export default NavBar;
