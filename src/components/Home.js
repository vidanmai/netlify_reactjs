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
          <p className="dark-grey-text">Vi serverer kun takeaway på avdelingene våre</p>
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
              <h2 className="orangeBorder">Bamboo Sagene</h2>
              <br />
              <h3>Åpningstider: </h3>
              <p>
                <br />
                Mandag - Fredag:
                <br />
                12:00 - 22:00
                <br />
                <br />
                Lørdag og Søndag:
                <br />
                13:00 - 22:00
                <br />
                <br />
                <p className="orangeBorder">
                  Kjøkkenet stenger <strong>21:45</strong> hele uken
                </p>
              </p>
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
          <h1 className="dark-grey-text">Våre Avdelinger</h1>
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
