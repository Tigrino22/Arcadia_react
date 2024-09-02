import '../../scss/_services.scss';
import CardService from './services/card';

export default function Services() {
    return (
        <section className="services-section">
            <h2>Nos Services</h2>
            <div className="services-list">
                <CardService image='./img/visite_guide.jpg' title="Visites Guidées">
                    Profitez de nos visites guidées pour en apprendre davantage sur les habitats et les espèces du zoo.
                </CardService>
                <CardService image="./img/atelier_enfants.jpg" title="Ateliers pour Enfants">
                    Des ateliers éducatifs et ludiques pour sensibiliser les enfants à la protection de la nature.
                </CardService>
                <CardService image="./img/restauration.jpg" title="Restauration">
                    Nos restaurants et snack-bars proposent des menus variés adaptés à toute la famille.
                </CardService>
            </div>
        </section>
    );
}
