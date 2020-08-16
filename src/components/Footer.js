import React from 'react';
import '../style/Footer.css';

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
                        <a href="https://www.facebook.com/bamboosagene/" target="_blank" rel="noopener noreferrer">
                            <div className="svgIcon facebookIcon"></div>
                        </a>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fbamboosagene%3Figshid%3D17tljgy452fl7%26fbclid%3DIwAR2PVhunA2hVMq1oR3HBiavnjQY4PNbfUuoZvO_NR_sg0fGePj8-1_QlT-g&h=AT2hlNtkBrsOsl8aWUsynG-xvcxGqypqvv0MD2COgcD87maVT09gcHGVmdEfFAsGYdJM1Xe4-smZCAYhbFGfrrHDMEAnVo-8FFg6eAzJNG-HJYwPb5Vnc0H1_yBjPWMoQTg" target="_blank" rel="noopener noreferrer">
                            <div className="svgIcon instagramIcon"></div>
                        </a>
                    </div>
                </div>
            </footer>
            
        );
    }
}

export default Footer;