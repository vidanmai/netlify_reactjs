import React from 'react';
import bambooPic from '../img/bambooOutside.PNG';
class Info extends React.Component {
    render() {
        return (
            <div className="case">
                <div className="container">
                    <h1 className="dark-grey-text">Bamboo</h1>
                    <br/>
                        <span className="grey-text">
                            <p>
                            Bamboo Restaurant holder til i Stockfleths gate 53b på sagene. 
                            Her kan du oppleve det beste fra både verdener, sushi og sashimi, 
                            samt forskjellige asiatiske retter.
                            </p>
                            <img className="wideImg" src={bambooPic} alt="" width="100%"/>
                            <p>
                            Du er velkommen til å nyte rettene på vår restaurant i avslappende og trendy omgivelser, eller bestille takeaway.
                            </p>
                        </span>
                </div>
            </div>
            
        );
    }
}

export default Info;