import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    color: 'blue'
};

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to="/blog">
                        <li>Blog</li>
                    </Link>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
