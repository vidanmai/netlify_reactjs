import React from 'react';
import '../style/Menu.css';
import AllergenButton from './AllergenButton';
import MenuList from './MenuList';

const allergener2 = [
    'G',
    'E',
    'F',
    'P',
    'S',
    'N',
    'Sel',
    'Sen',
    'Se',
    'Sv',
    'Sk',
    'Bl'
];

const sortedAllergens = allergener2.sort();

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
                    this.state.allergenList.splice(i, 1);
                    this.setState(state => ({
                        allergenList: this.state.allergenList
                    }));
                }
            }
        }
    }

    leggTilAllergen(allergen) {
        if (!this.state.allergenList.includes(allergen)) {
            this.state.allergenList.push(allergen);
            this.setState(state => ({
                allergenList: this.state.allergenList
            }));
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
                    {/*
                    <div className="buttonGrid">
                        <button className="bambooButton2">Bamboo Sagene</button>
                        <button className="bambooButton2">Bamboo Bjerke</button>
                        <button className="bambooButton2">Bamboo Uranienborg</button>
                    </div>
                    */}
                    <div className="meny">
                        <div className="sageneMeny">
                            <div className="allergenSeksjon">
                                <p>Allergener:
                                    <br />
                                    Gluten ( G – hvete ) | Egg ( E ) | Fisk ( F ) | Peanøtter ( P ) | Soya ( S ) | Nøtter ( N ) | Selleri ( Sel ) | Sennep ( Sen ) | Sesamfrø ( Se ) | Svoveldioksid og sulfitter ( Sv ) | Skalldyr ( Sk ) | Bløtdyr ( Bl ) </p>
                            </div>
                            <div id="allergenButtonGrid">
                                {sortedAllergens.map(allergen => {
                                    //Allergen Button
                                    return <AllergenButton key={allergen} string={allergen} fjernAllergen={this.fjernAllergen} leggTilAllergen={this.leggTilAllergen} sorterAllergener={this.sorterAllergener} />
                                })}
                            </div>
                            { /* Matrett seksjon */}
                            <div className="menySeksjon">
                                <MenuList allergenList={this.state.allergenList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;