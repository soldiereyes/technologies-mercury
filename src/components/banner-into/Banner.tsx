import './Banner.css';

const Banner: React.FC = () => {
    return (
        <section className="banner">
            <div className="banner-into-overlay">
            <div className="container">
                <div className="banner-into-content">
                    <span className="banner-tagline">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <h1 className="banner-into-title">
                        Proin vel ligula vel libero <br /> faucibus consequat.
                    </h1>
                    <p className="banner-subtitle">
                        Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit, id fermentum lorem nisi non enim.
                    </p>
                    <button className="cta-into-button">Saiba Mais</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Banner;
