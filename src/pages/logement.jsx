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

    return (
        <>
      
             <div>
                <Slider pictures={logement.pictures} />
                <h1>{logement.title}</h1>
                <p className='location-logement'>{logement.location}</p>
                <div className='tag-contain'>{tags}</div>
            </div>
            <div>

                <div>
                    
                </div>  
                
                              
                <div>
                        {marks.map((marksElement) => (
                            <span key={marksElement.toString()}>
                                <i className={`fa-solid fa-star ${logement.rating >= marksElement ? "star-full" : "star-empty"}`}></i>
                            </span>
                        ))}
                </div>
            
            </div>

        <div className='logement--collapse'>
            <Collapse className="space" title="Description" content={logement.description}/>
            <Collapse className="space" title="Équipements" content={<ul>{equipmentList}</ul>}/>
        </div>
        </>
        
        
        
        
        
    )
}


export default Logement