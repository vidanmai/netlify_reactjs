import React from "react";

class Dish extends React.Component {

    render() {
        //Check if an index on the dish exists
        let index = '';
        if(this.props.index != null) {
            index = this.props.index + '. ';
        }
        return (
            <div>
                <div className={this.props.styleName} key={this.props.navn}>
                    <div className="enhet">
                        <span className={this.props.nameStyle}>{index}{this.props.navn}</span>
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
