import Banner from "../components/Banner"
import Bannerback from '../assets/bannerback.png'



function Home() {
    return (
        <div>
            <Banner image={Bannerback} texte="Chez vous, partout et ailleurs" />
            
        </div>
    )
}


export default Home