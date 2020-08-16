import React from "react";
import "../style/Home.css";
import bambooSagene from "../img/bambooOutside.PNG";

class Home extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="landingPage">
          <div className="landingInfo">
            <div className="info">
              <p>
                <b>Telefon: </b>22 71 42 20
                <br />
                <b>Adresse: </b>Stockfleths gate 53b, Norway 0598
                <br />
                <br />
                <strong>Åpningstider: </strong>
                <br />
                Mandag - Fredag: 12:00 - 22:00
                <br />
                Lørdag og Søndag: 13:00 - 22:00
                <br />
                <br />
                <span id="warning">
                  Kjøkkenet stenger <b>21:45</b> hele uken
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="avdelinger">
          <div className="avdelingHeader">
            <h1>Våre Avdelinger</h1>
            <br />
            <hr />
            <br />
            <div className="avdelingGrid">
              <div className="buttons">
                <button>Bamboo Sagene</button>
                <button>Bamboo Bjerke</button>
                <button>Bamboo Uranienborg</button>
              </div>
              <div className="avdelingInfo">
                <img className="wideImg" src={bambooSagene} alt="" />
                <p>
                  Bamboo Restaurant holder til i Stockfleths gate 53b på Sagene.
                  Her kan du oppleve det beste fra ulike verdener, sushi og
                  sashimi, samt forskjellige asiatiske retter.
                </p>
                <br />
                <p>
                  Du er velkommen til å nyte rettene på vår restaurant i
                  avslappende og trendy omgivelser, eller bestille take-away. Vi
                  har også alle rettighetene til å drikke på vår restaurant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
