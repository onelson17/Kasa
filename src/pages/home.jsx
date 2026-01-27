import Banner from "../components/Banner"
import Bannerback from '../assets/bannerback.png'
import Card from '../components/Card.jsx'
import LogementData from '../data/logements.json'



function Home() {
    return (
        <>
        <div>
            <Banner image={Bannerback} texte="Chez vous, partout et ailleurs" />
        </div>
        <div className="card-contain">
           {LogementData.map((logement) => (
            <Card 
                key={logement.id}
                id={logement.id}
                location={logement.title}
                cover={logement.cover}
            
            />
           ))}
        </div>
        </>
        
    )
}


export default Home