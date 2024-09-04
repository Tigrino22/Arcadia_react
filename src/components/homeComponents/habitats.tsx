import '../../scss/homePage/_habitats.scss';
import CardHabitat from './habitats/card';


export default function Habitats() {
    return (
        <section className="habitats-section">
            <h2>Nos Habitats</h2>
            <div className="habitats-list">
                <CardHabitat
                    source="./img/savane.png"
                    title="Savane"
                >
                    Découvrez la vie sauvage de la savane, où lions, éléphants et autres animaux majestueux cohabitent.
                </CardHabitat>
                <CardHabitat
                    source="./img/jungle.png"
                    title="Jungle"
                >
                    Explorez la jungle luxuriante, pleine de mystères et d'espèces exotiques comme les singes et les oiseaux tropicaux.
                </CardHabitat>
                <CardHabitat
                    source="./img/marais.png"
                    title="Marais"
                >
                    Plongez dans l'atmosphère humide des marais, où crocodiles et autres créatures aquatiques vivent.
                </CardHabitat>
            </div>
        </section>
    );
}
