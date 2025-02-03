import 'bootstrap/dist/css/bootstrap.min.css';
import './PetroleumProductsSection.css';

const PetroleumProductsSection: React.FC = () => {
    return (
        <section className="petroleum-section py-5">
            <div className="container">
                <div className="row align-items-center">

                    {/* Coluna da Imagem */}
                    <div className="col-md-6 position-relative d-flex justify-content-center">
                        <div className="image-wrapper">
                            <img src="/public/images/scenic-view-oil-field-against-sky-sunset.jpg" alt="Petroleum Products" className="img-fluid rounded petroleum-image" />
                            <button className="cta-button">Lorem ipsum</button>
                        </div>
                    </div>

                    {/* Coluna do Texto */}
                    <div className="col-md-6 text-content">
                        <h2 className="section-title">PETROLEUM PRODUCTS</h2>
                        <p className="section-text">
                            Vestibulum at sapien sed lectus varius consequat vel ac arcu. Sed a ex at eros convallis eleifend.
                            Curabitur id quam auctor, posuere felis ut, fermentum eros. Sed molestie tincidunt libero, ut vehicula
                            libero aliquet ac. Vivamus mollis nisi lorem, ac rutrum augue sagittis ac. Donec fringilla, justo vitae
                            condimentum ultrices, odio purus sodales libero, in convallis neque eros non nisl...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetroleumProductsSection;
