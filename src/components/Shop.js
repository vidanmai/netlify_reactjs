import React from 'react';
import '../style/Avdeling.css';

class Shop extends React.Component {
    render() {
        return (
            <div className="case">
                <div className="container">
                    <h1 className="dark-grey-text">Bestill og hent</h1>
                    <br />
                    <div className="shops">
                        <div className="shop">
                            <div className="shopGrid">
                                <div className="shopHeader">
                                    <h2>Bamboo Sagene</h2>
                                </div>
                                <div className="shopLink">
                                    <a href="https://www.bamboosagene.no/">
                                        <button className="bambooButton">Bamboo Sagene</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <div className="shopGrid">
                                <div className="shopHeader">
                                    <h2>Bamboo Bjerke</h2>
                                </div>
                                <div className="shopLink">
                                    <a href="https://bamboobjerke.no/">
                                        <button className="bambooButton">
                                            Bamboo Bjerke
                            </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;