import './Footer.css';
import logo from '../../../public/images/logo-technologies-04.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="Technologies Mercury Logo" />
                        <h3>Technologies Mercury</h3>
                    </div>
                    <p>Call us if you need some help</p>
                    <p className="footer-phone">+000 00 000 0000</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li>Services
                            <ul className="sub-links">
                                <li><a href="#crude-oil">Crude oil and oil products trading</a></li>
                                <li><a href="#urea">Urea</a></li>
                                <li><a href="#oil-drilling">Oil Drilling</a></li>
                            </ul>
                        </li>
                        <li><a href="#orders">Orders</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2025 Technologies Mercury - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;