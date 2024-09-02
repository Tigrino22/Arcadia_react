import ReviewItem from "./reviewItem";
import '../../../scss/_reviews.scss';

export default function ReviewsSection() {
    return (
        <section className="reviews-section">
            <h2>Avis de Nos Visiteurs</h2>
            <div className="reviews-list">
                <ReviewItem
                    author="Jean Dupont"
                    content="Super expérience ! Les visites étaient passionnantes et le personnel très accueillant."
                />
                <ReviewItem
                    author="Marie Martin"
                    content="Un zoo magnifique avec des installations très propres. Mes enfants ont adoré les ateliers."
                />
                <ReviewItem
                    author="Paul Leroy"
                    content="Très bon rapport qualité-prix et des animaux en excellente santé. Je reviendrai sans hésiter."
                />
            </div>
        </section>
    );
}
