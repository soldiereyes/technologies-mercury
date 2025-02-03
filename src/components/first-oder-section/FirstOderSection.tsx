import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FirstOderSection.css';

const OrdersSection: React.FC = () => {
    return (
        <section className="orders-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Coluna da Imagem */}
                    <div className="col-md-6 position-relative">
                        <div className="image-wrapper">
                            <img src="/public/images/environmental-pollution-industry-exterior-daylight.jpg" alt="Oil Refinery" className="img-fluid rounded orders-image" />
                            <button className="cta-button btn btn-light position-absolute">Lorem ipsum</button>
                        </div>
                    </div>

                    {/* Coluna do Texto */}
                    <div className="col-md-6">
                        <h2 className="orders-title">LOREM IPSUM</h2>
                        <p className="orders-text">
                            Vestibulum at sapien sed lectus varius consequat vel ac arcu. Sed a ex at eros convallis eleifend.
                            Curabitur id quam auctor, posuere felis ut, fermentum eros. Sed molestie tincidunt libero, ut vehicula
                            libero aliquet ac. Vivamus mollis nisi lorem, ac rutrum augue sagittis ac...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrdersSection;
