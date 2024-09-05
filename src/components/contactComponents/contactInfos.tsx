/**
 * Cette fonction return les informations de contact du zoo
 * Les informations ci-dessous devrons etre récupérer sur une API 
 * Et il sera possible de les modifier dans l'espace d'administration
 * 
 * @returns (JSX.Element)
 */

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h2>Informations de Contact</h2>
            <p>Adresse : 123 Rue du Zoo, Ville, Pays</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
            <p>Email : <a href="mailto:contact@zoo.com">contact@zoo.com</a></p>
        </div>
    );
}
