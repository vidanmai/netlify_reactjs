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
            navName: 'displayNone',
            line1: '',
            line2: '',
            line3: ''
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
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
                navName: 'hideNav'
            });
        }
    }

    hideMenu() {
        //If the nav is toggled, disable on click
        if(this.state.toggle) {
            console.log("Disabled mobile nav")
            this.setState({
                toggle: !this.state.toggle,
                navStyle: '',
                navName: 'displayNone',
                line1: '',
                line2: '',
                line3: ''
            });
        }
    }

    closeNav() {
        if(this.state.toggle) {
            console.log("Disabled mobile nav");
            this.setState({
                toggle: !this.state.toggle,
                navStyle: '',
                navName: 'hideNav',
                line1: '',
                line2: '',
                line3: ''
            });
        } 
    }

    toggleNav() {
        //If toggled, reset menuButton
        if(this.state.toggle) {
            console.log("Clicked link. Disable menu");
            this.setState({
                toggle: !this.state.toggle,
                navStyle: '',
                navName: 'hideNav',
                line1: '',
                line2: '',
                line3: ''
            });
        } else {
            console.log("Toggle nav");
            this.setState({
                toggle: !this.state.toggle,
                navStyle: 'scrollable',
                navName: 'showNav',
                line1: 'line1',
                line2: 'line2',
                line3: 'line3'
            });
        }
    }

    render() {
        return (
            <nav className={this.state.navStyle}>
                <div className="navGrid">
                    <div className="logo">
                        <Link style={navStyle} to="/" className="logo" onClick={this.closeNav}>
                            <img src={logo} alt="restaurant logo" />
                        </Link>
                    </div>
                    <div id="menuButton">
                        <NavMenuButton toggleNav={this.toggleNav} line1={this.state.line1} line2={this.state.line2} line3={this.state.line3}/>
                    </div>
                </div>
                <div className={this.state.navName}>
                    <div onClick={this.hideMenu}>
                        <NavLinks/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
