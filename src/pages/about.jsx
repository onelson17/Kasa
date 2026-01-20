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
                    <Collapse title="Fiabilité" texte="hello world"/>
                </div>
                <div>
                    <Collapse title="Respect" texte="hello world"/>
                </div>
                <div>
                    <Collapse title="Service" texte="hello world" />
                </div>
                <div>
                    <Collapse title="Sécurité" texte="hello world" />
                </div>
            </section>
            
        </>
    )
}

export default About