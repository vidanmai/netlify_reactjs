import React from 'react';
import '../style/Avdeling.css';

class Shop extends React.Component {
    render() {
        return (
            <div className="case">
                <div className="container">
                    <h1 className="dark-grey-text orangeBorder">Bestill takeaway</h1>
                    <br />
                    <div className="shops">
                        <div className="shop">
                            <div className="shopGrid">
                                <div className="shopHeader">
                                    <h2 className="dark-grey-text">Bamboo Sagene</h2>
                                </div>
                                <div className="shopLink">
                                    <a href="https://www.bamboosagene.no/">
                                        <button className="bambooButton2">Bamboo Sagene</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <div className="shopGrid">
                                <div className="shopHeader">
                                    <h2 className="dark-grey-text">Bamboo Bjerke</h2>
                                </div>
                                <div className="shopLink">
                                    <a href="https://bamboobjerke.no/">
                                        <button className="bambooButton2">
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