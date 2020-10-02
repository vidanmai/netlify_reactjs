import React from 'react';
import './style/Menu.css';
import AllergenButton from './AllergenButton';
import MenuList from './MenuList';
import { allergenDescriptions } from './Allergener';
import plusIcon from './icons/plus-icon.svg';
import minusIcon from './icons/minus-icon.svg';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allergenList: [],
            toggleFilter: false,
            filterInput: plusIcon,
            filterName: 'hideFilter'
        };
        this.fjernAllergen = this.fjernAllergen.bind(this);
        this.leggTilAllergen = this.leggTilAllergen.bind(this);
        this.sorterAllergener = this.sorterAllergener.bind(this);
        this.openFilter = this.openFilter.bind(this);
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
        this.setState({
            allergenList: this.state.allergenList
        });
    }

    openFilter() {
        if (!this.state.toggleFilter) {
            console.log("Toggled filter");
            this.setState({
                toggleFilter: !this.state.toggleFilter,
                filterInput: minusIcon,
                filterName: 'buttonGrid',
            });
        } else {
            console.log("Disabled filter");
            this.setState({
                toggleFilter: !this.state.toggleFilter,
                filterInput: plusIcon,
                filterName: 'hideFilter',
            });
        }
    }

    render() {
        return (
            <div className="case">
                <div className="container dark-grey-text">
                    <h1 className="orangeBorder">Meny</h1>
                    <div className="meny">
                        <div className="sageneMeny">
                            <div className="allergenSeksjon">
                                <div className="filterHeader" onClick={this.openFilter}>
                                    <div className="filterTitle">
                                        <h3>Filter</h3>
                                    </div>
                                    <div className="filterToggle">
                                        <img src={this.state.filterInput} alt=""/>
                                    </div>
                                </div>
                                <div className={this.state.filterName}>
                                    {allergenDescriptions.map(allergen => {
                                        return <AllergenButton key={allergen.entry} description={allergen.desc} string={allergen.entry} fjernAllergen={this.fjernAllergen} leggTilAllergen={this.leggTilAllergen} sorterAllergener={this.sorterAllergener} />;
                                    })}
                                </div>
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