import 'bootstrap/dist/css/bootstrap.min.css';
import './OilDrillingBanner.css';

const OilDrillingBanner: React.FC = () => {
    return (
        <section className="oil-drilling-banner">
            <div className="overlay">
                <div className="container text-center">
                    <h1 className="banner-title">Loren ipsum <br /> Oil Drilling</h1>
                    <div className="cta-container">
                        <button className="cta-button">
                            Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit.
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OilDrillingBanner;
