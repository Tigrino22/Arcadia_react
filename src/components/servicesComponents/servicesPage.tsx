import '../../scss/servicesPage/_services.scss';

export default function ServicesPage(): JSX.Element {
    // Future dynamic part - to be implemented later
    // const [services, setServices] = useState([
    //     { id: 1, name: 'Service 1', image: 'path-to-service1.jpg', description: 'Description du service 1.' },
    //     { id: 2, name: 'Service 2', image: 'path-to-service2.jpg', description: 'Description du service 2.' },
    //     { id: 3, name: 'Service 3', image: 'path-to-service3.jpg', description: 'Description du service 3.' },
    // ]);

    const services = [
        { id: 1, name: 'Ateliers pour enfants', image: './img/atelier_enfants.jpg', description: 'Faites décourvri à vos enfants l\'environnement naturel à travers de nombreux ateliers.' },
        { id: 2, name: 'Visites guidées', image: './img/visite_guide.jpg', description: 'Des visites guidées pour découvrir les habitats et les animaux du parc.' },
        { id: 3, name: 'Restauration', image: './img/restauration.jpg', description: 'Des points de restauration pour les visiteurs, offrant des repas variés.' },
    ];

    return (
        <section className="services-page">
            <h1>Nos Services</h1>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={service.id} className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="service-content">
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                        </div>
                        <div className="service-image-container">
                            <img src={service.image} alt={service.name} className="service-image" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
