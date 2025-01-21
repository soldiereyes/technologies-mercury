import './Navbar.css';
import logo from '../../assets/images/logo-technologies-04.svg';

const Navbar: React.FC = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Technologies Mercury Logo" />
            </div>
            <nav className="navbar-nav">
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#orders">Orders</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
