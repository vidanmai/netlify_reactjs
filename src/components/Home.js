import React from "react";
import "../style/Home.css";
import bambooSagene from "../img/bambooOutside.PNG";
import foodPic from '../img/bamboo_sushi_bg.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const bambooInfo = <p>
      Bamboo Restaurant holder til i Stockfleths gate 53 b på Sagene.
      Her kan du oppleve det beste fra ulike verdener, sushi og
      sashimi, samt forskjellige asiatiske retter. 
      <br / >
        <br / >
        Du er velkommen til å nyte rettene på vår restaurant i
      avslappende og trendy omgivelser, eller bestille takeaway. Vi
      har også alle rettighetene til å drikke på vår restaurant.
    </p>
    return (
      <div className="case">
        <div className="infoBanner">
          <p className="dark-grey-text">Vi serverer kun takeaway på avdelingene våre</p>
          <Link to="/meny">
            <button className="bambooButton">Meny</button>
          </Link>
        </div>
        <div className="landingPage">
          <div className="landingImg">
            <img src={foodPic} className="landingImg" alt=""/>
          </div>
          <div className="landingInfo">
            <div className="info">
              <h2>Åpningstider: </h2>
              <p>
                <br/>
                Mandag - Fredag: 
                <br/>
                12:00 - 22:00
                <br />
                <br />
                Lørdag og Søndag:
                <br />
                13:00 - 22:00
                <br />
                <br />
                <span className="orangeBorder">
                  Kjøkkenet stenger <strong>21:45</strong> hele uken
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
                <button className="bambooButton2">Bamboo Sagene</button>
                <button className="bambooButton2">Bamboo Bjerke</button>
                <button className="bambooButton2">Bamboo Uranienborg</button>
              </div>
              <div className="avdelingInfo">
                <img className="responsiveImg" src={bambooSagene} alt="" />
                <div>
                  {bambooInfo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
