import "./CardSection.css";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const cards: CardProps[] = [
    {
        image: "/images/cropped-hand-person-with-crude-oil.jpg",
        title: "Mão com Petróleo Bruto",
        description: "A representação do petróleo bruto em sua forma natural.",
    },
    {
        image: "/images/cropped-hand-person-with-crude-oil.jpg",
        title: "Engenheiro no Campo de Petróleo",
        description: "Engenheiro trabalhando para garantir a eficiência no processo.",
    },
    {
        image: "/images/scenic-view-oil-field-against-sky-sunset.jpg",
        title: "Campo de Petróleo ao Pôr do Sol",
        description: "Uma bela vista de um campo de petróleo durante o pôr do sol.",
    },
    {
        image: "/images/cropped-hand-person-with-crude-oil.jpg",
        title: "Bombeador de Óleo ao Anoitecer",
        description: "A silhueta de um bombeador trabalhando ao anoitecer.",
    },
];

export const CardSection: React.FC = () => {
    return (
        <section className="card-section">
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
