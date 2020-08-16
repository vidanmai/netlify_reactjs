import React from 'react';
import '../style/Footer.css';
import facebookLogo from '../img/facebook-128.png';
import instagramLogo from '../img/instagram-128.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerGrid">
                    <div className="footer-info">
                        <p>
                            &copy; Bamboo Restaurant
                            <br/>
                            ORG NR: 918 437 762
                        </p>
                        </div>
                    <div className="footer-icons">
                        <img src={facebookLogo} alt=""/>
                        <img src={instagramLogo} alt=""/>
                    </div>
                </div>
            </footer>
            
        );
    }
}

export default Footer;