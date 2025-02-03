import React from 'react';
import './ContactBanner.css';

const ContactBanner: React.FC = () => {
    return (
        <section className="contact-banner">
            <div className="banner-overlay">
                <div className="container">
                    <div className="banner-content">
                        <h1 className="contact-title">Contact</h1>
                        <button className="cta-button">Loren ipsum ▼</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;
