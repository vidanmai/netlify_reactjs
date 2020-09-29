import React from "react";
import "../style/Home.css";
//import bambooSagene from "../img/bambooOutside.PNG";
import foodPic from '../img/bamboo_sushi_bg.jpg';
import sushiLarge from '../img/bamboo_bg.jpg';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

class Home extends React.Component {
  render() {
    return (
      <div className="case">
        <div className="infoBanner">
          <p className="dark-grey-text">For å hindre spredning av Covid-19 serverer vi kun takeaway på restaurantene våre</p>
          <Link to="/meny">
            <button className="bambooButton">Meny</button>
          </Link>
        </div>
        <div className="landingPage">
          <div className="landingImg">
            <img src={foodPic} className="responsiveImg" alt="" />
          </div>
          <div className="landingInfo">
            <div className="info">
              <h2 className="orangeBorder">Nyhet!</h2>
              <br />
              <p>Vi har åpnet en ny restaurant på Uranienborg!</p>
              <br />
              <p><b>Telefon:</b> 92 22 65 88</p>
              <p><b>Adresse:</b> Uranieborgveien 7B, 0351 Oslo</p>
              <p><b>Åpningstider:</b> Man-fre: 11.00 – 21.00 / Lør-søn: 13.00 – 21.00</p>
              <br />
              <p class="orangeBorder">Siste takeaway bestilling er 20:45</p>
            </div>
          </div>
        </div>
        <div className="secondGrid">
          <div className="bestillInfo">
            <h3>Vil du bestille og hente mat?</h3>
            <Link to="/shop">
              <span className="buttonBackground">
                <button className="bambooButton">Bestill mat</button>
              </span>
            </Link>
          </div>
          <div className="secondGridImg">
            <img src={sushiLarge} className="responsiveImg" alt="Sushi meny nr.57" />
          </div>
        </div>
        <div className="avdelinger">
          <h1 className="dark-grey-text">Våre Restauranter</h1>
          <br />
          <hr />
          <div className="avdelingGrid">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
