import Banner from "../components/Banner"
import Bannerback from '../assets/bannerback.png'
import Card from '../components/Card.jsx'
import LogementData from '../data/logements.json'



function Home() {
    return (
        <>
        <div>
        <Banner image={Bannerback} texte={<>Chez vous,<br className="break" /> partout et ailleurs</>} />
        </div>
        <div className="card-contain">
           {LogementData.map((logement) => (
            <Card 
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
                location={logement.location}
            />
           ))}
        </div>
        </>
        
    )
}


export default Home