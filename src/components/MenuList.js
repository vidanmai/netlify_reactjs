import React from "react";
function checkArray(allergenList, dishAllergens) {
    if(allergenList.length > 0) {
        for (let i = 0; i < dishAllergens.length; i++) {
            //If the dish contains the allergen, exclude dish
            if (allergenList.includes(dishAllergens[i])) {
                return false;
            }
        }
    }
    return true;
}
class MenuList extends React.Component {
    render() {
        const dishes = [
            {
                index: 1,
                kategori: 'foretter',
                navn: 'Kinesiske vårruller (2 stk)',
                beskrivelse: 'Fylt med oksekjøtt og kål. Serveres med sursøt saus',
                allergener: ['G', 'Sv'],
                pris: 55
            },
            {
                index: 2,
                kategori: 'foretter',
                navn: 'Vietnamesiske vårruller (2 stk)',
                beskrivelse: 'Fylt med svinekjøtt, grønnsaker og glassnudler. Serveres med søt chilisaus',
                allergener: ['E', 'F'],
                pris: 55
            },
            {
                index: 3,
                kategori: 'foretter',
                navn: 'Vegetar vårruller (4 stk)',
                beskrivelse: 'Serveres med sursøt saus',
                allergener: ['G', 'Sv'],
                pris: 45
            },
            {
                index: 4,
                kategori: 'foretter',
                navn: 'Tom yum kung',
                beskrivelse: 'Klassisk thai suppe med scampi og asiatiske ingredienser. Sterk og syrlig smak',
                allergener: ['F', 'Sk'],
                pris: 55
            }
        ];

        const filteredDishes = dishes.filter(dish => (checkArray(this.props.allergenList, dish.allergener)));
        return (
            <div>
                <h2>Foretter</h2>
                {filteredDishes.map(dish => {
                    return (
                        <div className="matrett" key={dish.index}>
                            <div className="enhet">
                                <span className="navn">{dish.index}. {dish.navn}</span>
                                <p className="beskrivelse">{dish.beskrivelse}</p>
                                <p className="allergener">{dish.allergener.join(', ')}</p>
                            </div>
                            <div className="pris">{dish.pris},-</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default MenuList;
