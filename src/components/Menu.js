import React from 'react';
import '../style/Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="case">
                <div className="container dark-grey-text">
                    <h1>Meny</h1>
                    <div className="buttonGrid">
                        <button className="bambooButton2">Bamboo Sagene</button>
                        <button className="bambooButton2">Bamboo Bjerke</button>
                        <button className="bambooButton2">Bamboo Uranienborg</button>
                    </div>
                    <div className="meny">
                        <div className="sageneMeny">
                            <div className="allergener">
                                <p>Allergener:
                                    <br />
                                    Gluten ( G – hvete ) | Egg ( E ) | Fisk ( F ) | Peanøtter ( P ) | Soya ( S ) | Nøtter ( N ) | Selleri ( Sel ) | Sennep ( Sen ) | Sesamfrø ( Se ) | Svoveldioksid og sulfitter (Sv) | Skalldyr ( Sk ) | Bløtdyr ( Bl ) </p>
                            </div>
                            <div className="menySeksjon">
                                <h2>Foretter</h2>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">1. Kinesiske vårruller (2 stk)</span>
                                        <p className="beskrivelse">Fylt med oksekjøtt og kål. Serveres med sursøt saus | G, Sv</p>
                                    </div>
                                    <div className="pris">55,-</div>
                                </div>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">2. Vietnamesiske vårruller (2 stk)</span>
                                        <p className="beskrivelse">Fylt med svinekjøtt, grønnsaker og glass-nudler. Serveres med søt chilisaus | E, F</p>
                                    </div>
                                    <div className="pris">55,-</div>
                                </div>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">3. Vegetar vårruller (4 stk)</span>
                                        <p className="beskrivelse">Serveres med sursøt saus | G, Sv</p>
                                    </div>
                                    <div className="pris">45,-</div>
                                </div>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">4. Tom yum kung</span>
                                        <p className="beskrivelse">Klassisk thai suppe med scampi og asiatiske ingredienser. Sterk og syrlig smak | F, Sk</p>
                                    </div>
                                    <div className="pris">55,-</div>
                                </div>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">7. Kylling satay (2 stk)</span>
                                        <p className="beskrivelse">Marinert kylling på grillspyd. Serveres m/peanøttsaus | G, E, P</p>
                                    </div>
                                    <div className="pris">59,-</div>
                                </div>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">9. Ferske vårruller (2 stk)</span>
                                        <p className="beskrivelse">Kylling, scampi, risnudler og asiatiske grønnsaker. Serveres med peanøttsaus | G, Sk, P</p>
                                    </div>
                                    <div className="pris">55,-</div>
                                </div>
                                <div className="matrett">
                                    <div className="enhet">
                                        <span className="navn">10. Rekechips</span>
                                        <p className="beskrivelse">Fritert rischips med rekesmak | Sk</p>
                                    </div>
                                    <div className="pris">55,-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;