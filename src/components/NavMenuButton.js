import React from 'react';
class NavMenuButton extends React.Component {

    render() {
        const name = "line ";
        return (
            <div id="menu" onClick={this.props.toggleNav}>
                <span className={name + this.props.line1}></span>
                <span className={name + this.props.line2}></span>
                <span className={name + this.props.line3}></span>
            </div>
        );
    }
}

export default NavMenuButton;