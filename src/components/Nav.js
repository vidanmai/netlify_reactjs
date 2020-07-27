import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import logo from '../img/bamboo_logo.png';

// Style for Links
const navStyle = {
    color: "white",
    listStyleType: 'none',
    textDecoration: 'none'
};


class Nav extends React.Component {
    
    render() {
        return (
            <nav class="navbar">
                <Link style={navStyle} to="/" className="logo">
                    <img src={logo} alt="restaurant logo" />
                </Link>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Hjem</li>
                    </Link>
                    <Link style={navStyle} to="/meny">
                        <li>Meny</li>
                    </Link>
                    <Link style={navStyle} to="/info">
                        <li>Info</li>
                    </Link>
                    <Link style={navStyle} to="/blogg">
                        <li>Blogg</li>
                    </Link>
                    <Link style={navStyle} to="/kontakt">
                        <li>Kontakt</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;
