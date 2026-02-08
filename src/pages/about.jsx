import Banner from "../components/Banner"
import BannerAbout from '../assets/about-banner.png'
import Collapse from "../components/Collapse"



function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-banner">
                    <Banner image={BannerAbout}/>
                </div>
                <section className="about-contain">
                <div>
                    <Collapse 
                        title="Fiabilité" 
                        content={<p className="text-collapse">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} 
                    />
                    </div>

                    <div>
                    <Collapse 
                        title="Respect" 
                        content={<p className="text-collapse">La bienveillance fait partie des valeurs de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} 
                    />
                    </div>

                    <div>
                    <Collapse 
                        title="Service" 
                        content={<p className="text-collapse">La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>} 
                    />
                    </div>

                    <div>
                    <Collapse 
                        title="Sécurité" 
                        content={<p className="text-collapse">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} 
                    />
                    </div>
                </section>
            </div>
            
        </>
    )
}

export default About