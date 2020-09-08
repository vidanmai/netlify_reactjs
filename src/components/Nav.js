import React from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css";
import logo from "../img/bamboo_logo.png";
import NavMenuButton from "./NavMenuButton";
import NavLinks from './NavLinks';

// Style for Links
const navStyle = {
    color: "#e0e0e0",
    listStyleType: "none",
    textDecoration: "none",
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            navName: ''   
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
    }
    toggleOverlay() {
        if(!this.state.toggle) {
            console.log("Toggled overlay");
            this.setState({
                toggle: !this.state.toggle,
                navName: 'navOverlay'
            });
        } else {
            this.setState({
                toggle: !this.state.toggle,
                navName: ''
            }); 
        }
    }

    render() {
        return (
            <nav className={this.state.navName}>
                <Link style={navStyle} to="/" className="logo">
                    <img src={logo} alt="restaurant logo" />
                </Link>
                <ul className="nav-links">
                    <NavLinks/>
                    <div onClick={this.toggleOverlay}>
                        <NavMenuButton/>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default Nav;
