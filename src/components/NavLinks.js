import React from 'react';
import { Link } from "react-router-dom";

// Style for Links
const navStyle = {
    color: "#e0e0e0",
    listStyleType: "none",
    textDecoration: "none",
};

class NavLinks extends React.Component {
    render() {
        return (
            <div className="links">
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
                    <li className="link">Bestill og hent</li>
                </Link>
                <Link style={navStyle} to="/kontakt">
                    <li className="link">Kontakt</li>
                </Link>
            </div>
        );
    }
}

export default NavLinks;