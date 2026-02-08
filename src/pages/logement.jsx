import '../css/Logement.css'
import Slider from '../components/Slider.jsx'
import { useParams, Navigate } from 'react-router-dom'
import Data from '../data/logements.json'
import Collapse from '../components/Collapse.jsx'
import Style from '../components/Style.jsx'


function Logement() {

    const { id } = useParams()
    const logement = Data.find((item) => item.id === id)
    if (!logement) {
        return <Navigate to="/404" replace={true}/> 
    }

    
    const equipmentList = logement.equipments.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>))
        const tags = logement.tags.map((tag, index) => (
            <div key={index} className='tag'>{tag}</div>
        ))
        
    const marks = [1, 2, 3, 4, 5]
    const hostName = logement.host.name.split(' ')

    return (
        <> 
           <div className='logement-container'>
                <div>
                        <Slider pictures={logement.pictures} />
                    </div>
                    <section className='logement-details'>
                        <div>
                            <h1>{logement.title}</h1>
                            <p className='location-logement'>{logement.location}</p>
                            <div className='tag-contain'>{tags}</div>
                        </div>
                        <div className='host-flex'>
                            <div className="host-container">
                                <div className="host-name">
                                    <span>{hostName[0]}</span>
                                    <span>{hostName[1]}</span>
                                </div>
                                <div className="host-picture">
                                    <img src={logement.host.picture} alt={logement.host.name} />
                                </div>
                            </div>
                                    
                            <div>
                                {marks.map((marksElement) => (
                                <span key={marksElement.toString()}>
                                    <i className={`fa-solid fa-star ${logement.rating >= marksElement ? "star-full" : "star-empty"}`}></i>
                                </span>
                                ))}
                            </div>
                    
                    </div>
                </section>
                <div className='logement--collapse'>
                    <Collapse className="space" title="Description" content={<p className='logement-description'>{logement.description}</p>}/>
                    <Collapse className="space" title="Équipements" content={<ul className='equipement-list'>{equipmentList}</ul>}/>
                </div>
           </div>
        </>
        
        
        
    )
}


export default Logement