import './HeroSection.css';

const HeroSection: React.FC = () => {
    const title = "Lorem ipsum dolor sit amet";
    const description = `Vestibulum at sapien sed lectus varius consequat vel ac arcu. Sed a ex at eros convallis eleifend. Curabitur id quam auctor, posuere felis ut, fermentum eros. Sed molestie tincidunt libero, ut vehicula libero aliquet ac. Vivamus mollis nisi lorem, ac rutrum augue sagittis ac. Donec fringilla, justo vitae condimentum ultrices, odio purus sodales libero, in convallis neque eros non nisl. Nullam vel libero nec ligula dictum rutrum vitae sit amet sapien.`;

    const imageUrl = "/images/silhouette-pumpjack-with-piston-pump-oil-well-against-background-sky.jpg";
    const ctaText = "Call to Action";

    const handleCtaClick = () => {
        alert('Ação iniciada com sucesso!');
    };

    return (
        <div className="hero-section">
            <div className="container">
                <div className="text-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button className="cta-button" onClick={handleCtaClick}>
                        {ctaText}
                    </button>
                </div>
                <div className="image-content">
                    <img src={imageUrl} alt="Demonstração do produto" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;