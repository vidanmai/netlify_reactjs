import React from 'react';
import '../style/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="landingPage">
                    <div className="landingInfo">
                        <div className="info">
                            <p>
                                <b>Telefon: </b>22 71 42 20
                                <br/>
                                <b>Adresse: </b>Stockfleths gate 53b, Norway 0598
                                <br/>
                                <br/>
                                <strong>Åpningstider: </strong>
                                <br/>
                                Mandag - Fredag: 12:00 - 22:00
                                <br/>
                                Lørdag og Søndag: 13:00 - 22:00
                                <br/>
                                <br/>
                                Kjøkkenet stenger <b>21:45</b> hele uken.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="avdelinger">
                    <div className="avdelingInfo">
                        <h1>Våre Avdelinger</h1>
                        <br/>
                        <hr/>
                        <br/>
                        <div className="buttons">
                            <button>Bamboo Sagene</button>
                            <button>Bamboo Bjerke</button>
                            <button>Bamboo Uranienborg</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;