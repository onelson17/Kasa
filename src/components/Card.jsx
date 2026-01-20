import '../css/Card.css'
import { Link } from 'react-router-dom'



function Card( {cover, location, id} ) {
    return (
        <Link className='card--link' to={`/Logement/${id}`}>

            <article className='card'>
                <h3 className='card--title'>Titre de la <br/>location</h3>
            </article>

        </Link> 
    )
}

export default Card