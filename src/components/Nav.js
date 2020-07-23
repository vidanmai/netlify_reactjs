import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import { Button } from '@material-ui/core';

// Style for Links
const navStyle = {
    color: "white",
    listStyleType: 'none',
    textDecoration: 'none'
};

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <Button variant="contained" color="secondary">Vector Restaurant</Button>
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
