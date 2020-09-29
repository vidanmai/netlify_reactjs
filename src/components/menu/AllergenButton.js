import React from "react";

class AllergenButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, className: "allergenButton" };
        this.handleClick = this.handleClick.bind(this);
    }

    get toggleState() {
        return this.state.isToggleOn;
    }

    handleClick() {
        //Button is toggled, toggle off
        if (this.state.isToggleOn) {
            //Remove allergen
            console.log("fjerner allergen: " + this.props.string);
            this.props.leggTilAllergen(this.props.string);
            this.setState((state) => ({
                isToggleOn: !state.isToggleOn,
                className: "allergenButton active",
            }));
        } else {
            //Button is off, toggle on
            //Add allergen back to the list
            console.log("legger til allergen: " + this.props.string);
            this.props.fjernAllergen(this.props.string);
            this.setState((state) => ({
                isToggleOn: !state.isToggleOn,
                className: "allergenButton",
            }));
        }
        //Sort the allergens last
        this.props.sorterAllergener();
    }

    render() {
        return (
            <div>
                <div className={this.state.className} onClick={this.handleClick}>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default AllergenButton;
