import React from 'react';
class NavMenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {line1: "", line2: "", line3: "", toggleActive: false };
    }

    toggleButton = () => {
        if(!this.state.toggleActive) {
            this.setState({
                toggleActive: true,
                line1: "line1",
                line2: "line2",
                line3: "line3"
            });
            console.log("Toggled active: " + this.state.toggleActive);
        } else {
            console.log("Is active: " + this.state.toggleActive)
            this.setState({
                toggleActive: !this.state.toggleActive,
                line1: "",
                line2: "",
                line3: ""
            });
        }
    }

    render() {
        const name = "line ";
        return (
            <div id="menu" onClick={this.toggleButton}>
                <span className={name + this.state.line1}></span>
                <span className={name + this.state.line2}></span>
                <span className={name + this.state.line3}></span>
            </div>
        );
    }
}

export default NavMenuButton;