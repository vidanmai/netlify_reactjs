import React from 'react';
import '../style/Info.css';
import tableDinner from '../img/bamboo_tabledinner_2.jpg';

class Info extends React.Component {
    render() {
        return (
            <div className="case" id="infoMain">
                <div id="infoGrid">
                    <img src={tableDinner} alt="" className="responsiveImg" id="infoImg" />
                    <div id="visjon">
                        <span id="visjonTekst">
                            <h1 className="dark-grey-text orangeBorder">Om Bamboo</h1>
                            <br />
                            <p>
                                Visjonen vår er å tilby kunder en smakebit av populære retter fra det asiatiske kjøkkenet.
                                Vi bruker ferske råvarer og kombinasjonen av ulike krydder for å oppnå spennende asiatiske smaker.
                        </p>
                            <br />
                            <p>
                                Her kan du forvente både varme retter og sushi til en veldig hyggelig pris.
                        </p>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info;