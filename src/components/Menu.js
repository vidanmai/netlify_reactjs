import React from 'react';
import '../style/Menu.css';
import AllergenButton from './AllergenButton';
import MenuList from './MenuList';
import { allergenDescriptions } from './Allergener';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allergenList: []
        };
        this.fjernAllergen = this.fjernAllergen.bind(this);
        this.leggTilAllergen = this.leggTilAllergen.bind(this);
        this.sorterAllergener = this.sorterAllergener.bind(this);
    }


    fjernAllergen(allergen) {
        if (this.state.allergenList.includes(allergen)) {
            for (let i = 0; i < this.state.allergenList.length; i++) {
                if (this.state.allergenList[i] === allergen) {
                    this.state.allergenList.splice(i, 1); //Removes the allergen from array
                    this.setState({
                        allergenList: this.state.allergenList
                    });
                    console.log(this.state.allergenList);
                }
            }
        }
    }

    leggTilAllergen(allergen) {
        if (!this.state.allergenList.includes(allergen)) {
            this.state.allergenList.push(allergen);
            this.setState({
                allergenList: this.state.allergenList
            });
            console.log(this.state.allergenList);
        }
    }

    sorterAllergener() {
        this.state.allergenList.sort();
        this.setState(state => ({
            allergenList: this.state.allergenList
        }));
    }

    render() {
        return (
            <div className="case">
                <div className="container dark-grey-text">
                    <h1>Meny</h1>
                    <div className="meny">
                        <div className="sageneMeny">
                            <div className="allergenSeksjon">
                                <h3>Filter</h3>
                            </div>
                            <div className="buttonGrid">
                                {allergenDescriptions.map((allergen, i) => {
                                    //Allergen Button
                                    if(allergenDescriptions.length - 1 === i) {
                                        return <AllergenButton key={allergen.entry} description={allergen.desc} string={allergen.entry} fjernAllergen={this.fjernAllergen} leggTilAllergen={this.leggTilAllergen} sorterAllergener={this.sorterAllergener} />;
                                    } else {
                                        return (<React.Fragment key={allergen.entry}>
                                            <AllergenButton key={allergen.entry} description={allergen.desc} string={allergen.entry} fjernAllergen={this.fjernAllergen} leggTilAllergen={this.leggTilAllergen} sorterAllergener={this.sorterAllergener} />
                                            <div className="hyphen">-</div>
                                        </React.Fragment>);
                                    }
                                })}
                            </div>
                            { /* Matrett seksjon */}
                            <div className="menySection">
                                <MenuList allergenList={this.state.allergenList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;