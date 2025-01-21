import './Banner.css';

const Banner: React.FC = () => {
    return (
        <section className="banner d-flex flex-column justify-content-center align-items-center">
            <div className="container text-center text-white">
                <h1 className="display-4 fw-bold">Proin vel ligula vel libero faucibus consequat</h1>
                <p className="lead">
                    Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit.
                </p>
                <button className="btn btn-primary btn-lg mt-3">Saiba Mais</button>
            </div>
        </section>
    );
};

export default Banner;
