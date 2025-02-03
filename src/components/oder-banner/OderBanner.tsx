import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OderBanner.css';

const OrdersBanner: React.FC = () => {
    return (
        <section className="orders-banner d-flex align-items-center">
            <div className="container text-center">
                <h1 className="orders-title">Lorem Ipsum</h1>
                <button className="cta-button">Lorem ipsum ▼</button>
            </div>
        </section>
    );
};

export default OrdersBanner;
