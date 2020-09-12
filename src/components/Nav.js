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
            navStyle: '',
            navName: 'displayNone'
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
    }
    toggleOverlay() {
        if (!this.state.toggle) {
            console.log("Enabled mobile nav");
            this.setState({
                toggle: !this.state.toggle,
                navStyle: 'scrollable',
                navName: 'showNav'
            });
        } else {
            console.log("Disabled mobile nav")
            this.setState({
                toggle: !this.state.toggle,
                navStyle: '',
                navName: 'displayNone'
            });
        }
    }

    render() {
        return (
            <nav className={this.state.navStyle}>
                <div className="navGrid">
                    <div className="logo">
                        <Link style={navStyle} to="/" className="logo">
                            <img src={logo} alt="restaurant logo" />
                        </Link>
                    </div>
                    <div className="space"></div>
                    <div id="menuButton">
                        <NavMenuButton toggleNav={this.toggleOverlay}/>
                    </div>
                </div>
                <div className={this.state.navName}>
                    <NavLinks />
                </div>
            </nav>
        );
    }
}

export default Nav;
