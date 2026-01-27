import Banner from "../components/Banner"
import BannerAbout from '../assets/about-banner.png'
import Collapse from "../components/Collapse"



function About() {
    return (
        <>
            <div>
                <Banner image={BannerAbout}/>
            </div>
            <section className="about-contain">
                <div>
                    <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                </div>
                <div>
                    <Collapse title="Respect" content="La bienveillance fait partie des valeurs de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."/>
                </div>
                <div>
                    <Collapse title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interactions, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect de bienveillance." />
                </div>
                <div>
                    <Collapse title="Sécurité" content="La sécurité est la priorité des Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </section>
            
        </>
    )
}

export default About