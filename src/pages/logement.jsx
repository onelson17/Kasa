import '../css/Logement.css'
import Slider from '../components/Slider.jsx'
import { useParams } from 'react-router-dom'
import Data from '../data/logements.json'
import Collapse from '../components/Collapse.jsx'


function Logement() {

    const { id } = useParams()
    const logement = Data.find((item) => item.id === id)
    if (!logement) {
        return <Navigate to="*" /> 
    }
    const equipmentList = logement.equipments.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>))
    return (
        <>
        <div>
            <Slider pictures={logement.pictures} />
            <h1>{logement.title}</h1>
            <p className='location-logement'>{logement.location}</p>
        </div>
        <div className='logement--collapse'>
            <Collapse className="space" title="Description" content={logement.description}/>
            <Collapse className="space" title="Équipements" content={<ul>{equipmentList}</ul>}/>
        </div>
        </>
        
        
        
        
        
    )
}


export default Logement