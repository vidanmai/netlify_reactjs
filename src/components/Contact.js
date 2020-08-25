import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="case">
        <div className="container">
          <h2 className="dark-grey-text">Bamboo Sagene</h2>
          <br />
          <p className="grey-text">
            Stockfleths gate 53b, 0461 Oslo
            <br/>
            22 71 42 20
          </p>
          <br/><br/>
          <h2 className="dark-grey-text">Bamboo TO GO Bjerke</h2>
          <br/>
          <p className="grey-text">
            Brobekkveien 31, 0598 Oslo
            <br/>
            92 26 69 89 
          </p>
          <br/><br/>
          <h2 className="dark-grey-text">Bamboo TO GO Uranienborg</h2>
          <br/>
          <p className="grey-text">
            Uranieborgveien 7B, 0351 Oslo
            <br/>
            92 22 65 88
          </p>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default Contact;
