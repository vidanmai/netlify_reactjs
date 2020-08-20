import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import logo from '../img/bamboo_logo.png';

// Style for Links
const navStyle = {
    color: "#e0e0e0",
    listStyleType: 'none',
    textDecoration: 'none'
};


class Nav extends React.Component {
    
    render() {
        return (
            <nav className="navbar">
                <Link style={navStyle} to="/" className="logo">
                    <img src={logo} alt="restaurant logo" />
                </Link>
                <ul className="nav-links">
                        <Link style={navStyle} to="/">
                            <li className="link">Hjem</li>
                        </Link>
                        <Link style={navStyle} to="/meny">
                            <li className="link">Meny</li>
                        </Link>
                        <Link style={navStyle} to="/info">
                            <li className="link">Om Oss</li>
                        </Link>
                        <Link style={navStyle} to="/shop">
                            <li className="link">Bestill</li>
                        </Link>
                        <Link style={navStyle} to="/kontakt">
                            <li className="link">Kontakt</li>
                        </Link>
                    <div style={navStyle} id="menu">
                        <li>☰</li>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default Nav;
