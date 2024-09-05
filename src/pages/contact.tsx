/**
 * Page de contact ou les utilisateur peuvent nous laisser leur avis en privé
 * 
 */
import ContactForm from "../components/contactComponents/contactForm";
import ContactInfo from "../components/contactComponents/contactInfos";
import "../scss/contactPage/_contactPage.scss";

export default function Contact() {
    return <>
        <section className="contact-page">
            <h1>Contactez-nous</h1>
            <div className="contact-content">
                <ContactForm />
                <ContactInfo />
            </div>
        </section>
    </>
}