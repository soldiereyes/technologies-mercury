import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InfoBanner.css';

const InfoBanner: React.FC = () => {
    return (
        <section className="info-banner py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Coluna da Imagem */}
                    <div className="col-md-6 position-relative">
                        <div className="image-wrapper">
                            <img src="/public/images/woman-working-call-center-office-with-headphones-computer.jpg"
                                 alt="Support Agent"
                                 className="img-fluid rounded info-image" />
                            <button className="cta-button btn btn-light position-absolute">Lorem ipsum</button>
                        </div>
                    </div>

                    {/* Coluna do Texto */}
                    <div className="col-md-6">
                        <h2 className="info-title">LOREM IPSUM</h2>
                        <p className="info-text">
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

export default InfoBanner;
