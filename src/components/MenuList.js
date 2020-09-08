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

function getDish(dish, kategoriNavn) {
    if (kategoriSjekk(dish, kategoriNavn)) {
        return (
            <Dish key={dish.index} index={dish.index} navn={dish.navn} beskrivelse={dish.beskrivelse} allergener={dish.allergener} pris={dish.pris} />
        );
    } else {
        return null;
    }
}

function menuSection(dishes, kategoriNavn) {
    return (<div className="menuSection">
        <h2>{kategoriNavn}</h2>
        {dishes.map(dish => {
            return getDish(dish, kategoriNavn);
        })}
    </div>);
}

class MenuList extends React.Component {

    render() {
        const filteredDishes = dishes.filter(dish => (checkArray(this.props.allergenList, dish.allergener)));
        return (
            <div>
                {menuSection(filteredDishes, 'Foretter')}
                {menuSection(filteredDishes, 'Thailandsk')}
            </div>
        );
    }
}

export default MenuList;
