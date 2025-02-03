import 'bootstrap/dist/css/bootstrap.min.css';
import './UreaBanner.css';

const UreaBanner: React.FC = () => {
    return (
        <section className="crude-oil-banner d-flex align-items-center">
            <div className="container text-left">
                <h1 className="banner-title">Crude oil and petroleum<br />products trading</h1>
                <div className="description-box">
                    Nullam dignissim, orci non fermentum malesuada, eros ipsum gravida velit.
                </div>
            </div>
        </section>
    );
};

export default UreaBanner;
