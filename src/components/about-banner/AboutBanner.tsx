import "./AboutBanner.css";

const AboutBanner: React.FC = () => {
    return (
        <section className="about-banner">
            <div className="overlay"></div>
            <div className="content">
                <h1>Lorem ipsum <br /> Dolor sit amet</h1>
                <button className="cta-button">
                    Lorem ipsum <span className="arrow">▼</span>
                </button>
            </div>
        </section>
    );
};

export default AboutBanner;
