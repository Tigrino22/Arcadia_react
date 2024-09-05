import "../../scss/habitatsPage/_habitats.scss";

export default function HabitatsPage() {
    // Future dynamic part - to be implemented later
    // const [habitats, setHabitats] = useState([
    //     { id: 1, name: 'Savane', image: 'path-to-savane.jpg', description: 'La savane est vaste et accueillante.' },
    //     { id: 2, name: 'Jungle', image: 'path-to-jungle.jpg', description: 'La jungle est dense et mystérieuse.' },
    //     { id: 3, name: 'Marais', image: 'path-to-marais.jpg', description: 'Le marais est humide et mystérieux.' },
    // ]);

    const habitats = [
        { id: 1, name: 'Savane', image: './img/savane.png', description: 'La savane est vaste et accueillante, peuplée par des lions, éléphants et autres animaux majestueux.', link: '#', linkName: 'Plus d\'informations' },
        { id: 2, name: 'Jungle', image: './img/jungle.png', description: 'La jungle est dense et mystérieuse, abritant des espèces exotiques comme les singes et les oiseaux tropicaux.', link: '#', linkName: 'Plus d\'informations' },
        { id: 3, name: 'Marais', image: './img/marais.png', description: 'Le marais est humide et mystérieux, avec une faune unique incluant des crocodiles et autres créatures aquatiques.', link: '#', linkName: 'Plus d\'informations' },
    ];

    return (
        <section className="habitats-page">
            <h1>Nos Habitats Principaux</h1>
            <div className="habitats-list">
                {habitats.map((habitat, index) => (
                    <div key={habitat.id} className={`habitat-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="habitat-content">
                            <h2>{habitat.name}</h2>
                            <p>{habitat.description}</p>
                            <a href={habitat.link} className="btn">{habitat.linkName}</a>
                        </div>
                        <div className="habitat-image-container">
                            <img src={habitat.image} alt={habitat.name} className="habitat-image" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
