import '../../scss/listePage/_listePage.scss';

export default function ServicesPage(): JSX.Element {
    // Future dynamic part - to be implemented later
    // const [services, setServices] = useState([
    //     { id: 1, name: 'Service 1', image: 'path-to-service1.jpg', description: 'Description du service 1.' },
    //     { id: 2, name: 'Service 2', image: 'path-to-service2.jpg', description: 'Description du service 2.' },
    //     { id: 3, name: 'Service 3', image: 'path-to-service3.jpg', description: 'Description du service 3.' },
    // ]);

    const services = [
        { id: 1, name: 'Ateliers pour enfants', image: './img/atelier_enfants.jpg', description: 'Faites décourvri à vos enfants l\'environnement naturel à travers de nombreux ateliers.', link: '#', linkName: 'Plus d\'informations'},
        { id: 2, name: 'Visites guidées', image: './img/visite_guide.jpg', description: 'Des visites guidées pour découvrir les habitats et les animaux du parc.', link: '#', linkName: 'Plus d\'informations'},
        { id: 3, name: 'Restauration', image: './img/restauration.jpg', description: 'Des points de restauration pour les visiteurs, offrant des repas variés.', link: '#', linkName: 'Plus d\'informations'},
    ];

    return (
        <section className="content-page">
            <h1>Nos Services</h1>
            <div className="content-list">
                {services.map((service, index) => (
                    <div key={service.id} className={`content-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="content-content">
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                            <a href={service.link} className="btn">{service.linkName}</a>
                        </div>
                        <div className="content-image-container">
                            <img src={service.image} alt={service.name} className="content-image" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
