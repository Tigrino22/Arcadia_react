export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Arcadia Zoo</h4>
                        <ul>
                            <li><a href="#">À propos</a></li>
                            <li><a href="#">Nos services</a></li>
                            <li><a href="#">Politique de confidentialité</a></li>
                            <li><a href="#">Nous contacter</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Aide</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Horaires</a></li>
                            <li><a href="#">Plan du site</a></li>
                            <li><a href="#">Conditions générales</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Habitats</h4>
                        <ul>
                            <li><a href="#">Savane</a></li>
                            <li><a href="#">Jungle</a></li>
                            <li><a href="#">Marais</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">

                        {/* Ces informations peuvent être récupérées via requéte en BDD ?NoSQL? */}

                        <h4>Horaires d'ouverture</h4>
                        <ul>
                            <li>Lundi - Vendredi: 9h - 18h</li>
                            <li>Samedi: 10h - 19h</li>
                            <li>Dimanche: 10h - 17h</li>
                            <li>Jours fériés: 11h - 16h</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Suivez-nous</h4>
                        <div className="social-links">
                            <a href="#"><i className="ri-facebook-circle-line"></i></a>
                            <a href="#"><i className="ri-twitter-x-line"></i></a>
                            <a href="#"><i className="ri-instagram-line"></i></a>
                            <a href="#"><i className="ri-linkedin-box-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
