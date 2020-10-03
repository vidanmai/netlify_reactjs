import React from 'react';
import '../style/Info.css';
import tableDinner from '../img/bamboo_tabledinner_2.jpg';

class Info extends React.Component {
    render() {
        return (
            <div className="case" id="infoMain">
                <div id="infoGrid">
                    <div id="imgContainer">
                        <img src={tableDinner} alt="" className="responsiveImg" id="infoImg"/>
                    </div>
                    <div id="visjon">
                        <span id="visjonTekst">
                            <h1 className="orangeBorder">Om Bamboo</h1>
                            <br />
                            <p>
                                Visjonen vår er å tilby kunder en smakebit på populære retter fra det asiatiske kjøkkenet.
                                Vi bruker ferske råvarer og kombinasjonen av ulike krydder for å oppnå spennende asiatiske smaker.
                        </p>
                            <br />
                            <p>
                                Her kan du forvente både varme retter og sushi til en veldig hyggelig pris.
                        </p>
                        <br/>
                        <p>Det er mulig å bestille takeaway eller bestille hjemlevering gjennom vår partner Foodora.</p>
                        <br/>
                        <p>Velkommen!</p>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info;