import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="case">
        <div className="container">
          <h1 className="dark-grey-text">Kontakt</h1>
          <br />
          <span className="grey-text">
            <ul style={{ listStyleType: "none" }}>
              <li>Mandag - Fredag</li>
              <li>12.00-22.00</li>
              <br />
              <li>Lørdag og Søndag</li>
              <li>13.00-22.00</li>
            </ul>
            <br />
            <p>KJØKKENET STENGER KLOKKEN 21:45 HELE UKEN.</p>
            <br />
            <p>
              Adressen vår er Stockfleths gate 53b Oslo, Norway 0598 Kontakt oss
              på 22 71 42 20 eller kontakt@bamboosagene.no
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
