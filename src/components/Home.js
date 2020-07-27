import React from 'react';
import '../style/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="landingPage">
                </div>
                <div className="hero">
                    <p>
                        <b>Telefon: </b>22 71 42 20
                        <br/>
                        <b>Adresse: </b>Stockfleths gate 53b, Norway 0598
                        <br/>
                        <b>Åpningstider: </b>Mandag-Fredag: 12:00 - 22:00
                        <br/>
                        <pre>                         Lørdag og Søndag: 13:00 - 22:00</pre>
                        <br/>
                        Kjøkkenet stenger <b>21:45</b> hele uken.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;