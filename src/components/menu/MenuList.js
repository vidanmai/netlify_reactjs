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
            return <Dish key={dish.index} styleName="dish" index={dish.index} navn={dish.navn} nameStyle="navn" beskrivelse={dish.beskrivelse} allergener={dish.allergener} pris={dish.pris} />;
        } else {
            return <Dish key={dish.index} styleName="grey-dish" index={dish.index} navn={dish.navn} nameStyle="grey-navn" beskrivelse={dish.beskrivelse} allergener={dish.allergener} pris={dish.pris} />;
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
                {menuSection("blue", dishes, this.props.allergenList, 'Foretter')}
                {menuSection("blue", dishes, this.props.allergenList, 'Thailandsk')}
            </div>
        );
    }
}

export default MenuList;