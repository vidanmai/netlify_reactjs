import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="case">
        <div className="container dark-grey-text" style={{fontWeight: 'lighter'}}>
          <div className="avdeling">
            <h2>Bamboo Sagene</h2>
            <br />
            <ul style={{ listStyleType: "none" }}>
              <li>Stockfleths gate 53b, 0461 Oslo</li>
              <li>22 71 42 20</li>
              <br />
              <b>Åpningstider</b>
              <li>Mandag - Fredag: 12:00 - 22:00</li>
              <li>Lørdag og Søndag: 13:00 - 22:00</li>
            </ul>
            <br /><br />
          </div>
          <div className="avdeling">
            <h2>Bamboo Bjerke</h2>
            <br />
            <ul style={{ listStyleType: "none" }}>
              <li>Brobekkveien 31, 0598 Oslo</li>
              <li>92 26 69 89</li>
              <br />
              <b>Åpningstider</b>
              <li>Mandag - Fredag: 12:00 - 21:00</li>
              <li>Lørdag og Søndag: 13:00 - 21:00</li>
            </ul>
            <br /><br />
          </div>
          <div className="avdeling">
            <h2>Bamboo Uranienborg</h2>
            <br />
            <ul style={{ listStyleType: "none" }}>
              <li>Uranieborgveien 7B, 0351 Oslo</li>
              <li>92 22 65 88</li>
              <br />
              <b>Åpningstider</b>
              <li>Mandag - Fredag: 12:00 - 21:00</li>
              <li>Lørdag og Søndag: 13:00 - 21:00</li>
            </ul>
            <br /><br />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
