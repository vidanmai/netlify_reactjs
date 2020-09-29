import React from "react";

class Dish extends React.Component {

    render() {
        return (
            <div>
                <div className={this.props.styleName} key={this.props.index}>
                    <div className="enhet">
                        <span className={this.props.nameStyle}>{this.props.index}. {this.props.navn}</span>
                        <p className="beskrivelse">{this.props.beskrivelse}</p>
                        <p className="allergener">{this.props.allergener.join(', ')}</p>
                    </div>
                    <div className="pris">{this.props.pris},-</div>
                </div>
            </div>
        );
    }
}

export default Dish;
