import Banner from "../components/Banner"
import Bannerback from '../assets/bannerback.png'
import Card from '../components/Card.jsx'
import LogementData from '../data/logements.json'

const logements = [
    {id: '1', title: 'Test', cover: 'url'},
    {id: '2', title: 'Test 2', cover: 'url'},
    {id: '3', title: 'Test 3', cover: 'url'},
    {id: '4', title: 'Test 4', cover: 'url'},
    {id: '5', title: 'Test 5', cover: 'url'},
    {id: '6', title: 'Test 6', cover: 'url'}
]

function Home() {
    return (
        <>
        <div>
            <Banner image={Bannerback} texte="Chez vous, partout et ailleurs" />
        </div>
        <div className="card-contain">
           {logements.map((logement) => (
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