import 'bootstrap/dist/css/bootstrap.min.css';
import './OilDrillingSection.css';

const OilDrillingSection: React.FC = () => {
    return (
        <section className="crude-oil-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Coluna do Texto */}
                    <div className="col-md-7 text-white">
                        <h2 className="section-title">CRUDE OIL</h2>
                        <p className="section-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula vel libero faucibus consequat non ac metus.
                            Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit, id fermentum lorem nisi non enim. Nam ac justo
                            vitae felis cursus malesuada in ac erat. Cras tincidunt purus nec nulla fermentum, nec dignissim lacus fermentum.
                            Sed euismod auctor orci, ac elementum est molestie a. Pellentesque id viverra nisi. Ut vitae urna id justo feugiat efficitur.
                        </p>
                    </div>

                    {/* Coluna da Imagem */}
                    <div className="col-md-5 position-relative">
                        <div className="image-wrapper">
                            <img src="/public/images/workers-standing-checking-beside-working-oil-pumps.jpg" alt="Crude Oil in Hands" className="img-fluid rounded crude-image" />
                            <button className="cta-button">Lorem ipsum</button>
                        </div>
                    </div>
                </div>

                {/* Texto Adicional na Parte Inferior */}
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="extra-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula vel libero faucibus consequat non ac metus.
                            Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit, id fermentum lorem nisi non enim. Nam ac justo
                            vitae felis cursus malesuada in ac erat. Cras tincidunt purus nec nulla fermentum, nec dignissim lacus fermentum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OilDrillingSection;
