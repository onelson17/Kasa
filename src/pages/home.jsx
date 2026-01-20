import Banner from "../components/Banner"
import Bannerback from '../assets/bannerback.png'
import Card from '../components/Card.jsx'


function Home() {
    return (
        <>
        <div>
            <Banner image={Bannerback} texte="Chez vous, partout et ailleurs" />
        </div>
        <div className="card-contain">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
        
    )
}


export default Home