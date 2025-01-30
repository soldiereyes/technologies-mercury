import "./FirstAboutSection.css";

const FirstSectionAbout: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-text">
                <h1>LOREM IPSUM <br /> CURABITUR</h1>
                <p>
                    Vestibulum at sapien sed lectus varius consequat vel ac arcu. Sed a ex
                    at eros convallis eleifend. Curabitur id quam auctor, posuere felis ut,
                    fermentum eros. Sed molestie tincidunt libero, ut vehicula libero aliquet ac.
                    Vivamus mollis nisi lorem, ac rutrum augue sagittis ac.
                    Donec fringilla, justo vitae condimentum ultrices, odio purus sodales libero,
                    in convallis neque eros non nisl. Nullam vel libero nec ligula dictum rutrum
                    vitae sit amet sapien.
                </p>
            </div>
            <div className="about-image">
                <img src="../../../public/images/portrait-oilfield-worker-standing-by-gas-pipe-construction-site.jpg" alt="Engenheiro em campo" />
            </div>
        </section>
    );
};

export default FirstSectionAbout;
