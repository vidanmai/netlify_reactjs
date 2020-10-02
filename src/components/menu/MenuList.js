import React from "react";
import { dishes } from './Dishes';
import Dish from './Dish';

function checkArray(allergenList, dishAllergens) {
    if (allergenList.length > 0) {
        for (let i = 0; i < dishAllergens.length; i++) {
            //If the dish contains the allergen, exclude dish
            if (allergenList.includes(dishAllergens[i])) {
                return false;
            }
        }
    }
    return true;
}

function kategoriSjekk(dish, kategoriNavn) {
    if (dish.kategori.toLowerCase() === kategoriNavn.toLowerCase()) {
        return true;
    }
    return false;
}

function getDish(dish, allergenList, kategoriNavn) {
    if (kategoriSjekk(dish, kategoriNavn)) {
        if(checkArray(allergenList, dish.allergener)) {
            return <Dish key={dish.navn} styleName="dish" index={dish.index} navn={dish.navn} nameStyle="navn" beskrivelse={dish.beskrivelse} allergener={dish.allergener} pris={dish.pris} />;
        } else {
            return <Dish key={dish.navn} styleName="grey-dish" index={dish.index} navn={dish.navn} nameStyle="grey-navn" beskrivelse={dish.beskrivelse} allergener={dish.allergener} pris={dish.pris} />;
        }
    } else {
        return null;
    }
}

function menuSection(color, dishes, allergenList, kategoriNavn) {
    return (<div className="menuSection">
        <h2 style={{backgroundColor: color, color: "white", padding: "1rem"}}>{kategoriNavn}</h2>
        {dishes.map(dish => {
            return getDish(dish, allergenList, kategoriNavn);
        })}
    </div>);
}

class MenuList extends React.Component {

    render() {
        return (
            <div>
                {menuSection('darkblue', dishes, this.props.allergenList, 'Foretter')}
                {menuSection('darkblue', dishes, this.props.allergenList, 'Thailandsk')}
                {menuSection('red', dishes, this.props.allergenList, 'Vietnamesisk')}
                {menuSection('red', dishes, this.props.allergenList, 'Stekt ris - Nudler')}
                {menuSection('red', dishes, this.props.allergenList, 'Vegetar')}
                {menuSection('green', dishes, this.props.allergenList, 'Kinesisk')}
                {menuSection('green', dishes, this.props.allergenList, 'Husets anbefalinger')}
                {menuSection('black', dishes, this.props.allergenList, 'Japansk')}
                {menuSection('black', dishes, this.props.allergenList, 'Bamboo Meny')}
                {menuSection('black', dishes, this.props.allergenList, 'Nigiri sushi - 2 biter per ordre')}
                {menuSection('black', dishes, this.props.allergenList, 'Maki mono - 6 biter')}
                {menuSection('black', dishes, this.props.allergenList, 'Futo maki - 6 biter')}
                {menuSection('black', dishes, this.props.allergenList, 'Sashimi')}
                {menuSection('black', dishes, this.props.allergenList, 'Ekstra')}
                {menuSection('black', dishes, this.props.allergenList, 'Mineralvann')}
            </div>
        );
    }
}

export default MenuList;