import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SecondOderSection.css';

const SecondOderSection: React.FC = () => {
    return (
        <section className="orders-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Coluna do Texto */}
                    <div className="col-md-6">
                        <h2 className="orders-title">LOREM IPSUM</h2>
                        <p className="orders-text">
                            Vestibulum at sapien sed lectus varius consequat vel ac arcu. Sed a ex at eros convallis eleifend.
                            Curabitur id quam auctor, posuere felis ut, fermentum eros. Sed molestie tincidunt libero, ut vehicula
                            libero aliquet ac. Vivamus mollis nisi lorem, ac rutrum augue sagittis ac...
                        </p>
                    </div>

                    {/* Coluna da Imagem */}
                    <div className="col-md-6">
                        <img src="/public/images/crude-oil-along-beach-ao-phrao-after-nearby-oil-spill-gulf-thailand.jpg" alt="Oil in Hand" className="img-fluid rounded orders-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondOderSection;
