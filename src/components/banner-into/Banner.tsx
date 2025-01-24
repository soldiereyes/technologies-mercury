
import './Banner.css';

const Banner: React.FC = () => {
    return (
        <section className="banner d-flex align-items-center">
            <div className="banner-overlay"></div>
            <div className="container">
                <div className="banner-content text-white">
                    <h1 className="banner-title">
                        Proin vel ligula vel libero <br /> faucibus consequat.
                    </h1>
                    <p className="banner-subtitle">
                        Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit, id fermentum lorem nisi non enim.
                    </p>
                    <button className="btn btn-primary btn-lg mt-3">Saiba Mais</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
