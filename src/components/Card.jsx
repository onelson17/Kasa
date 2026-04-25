import '../css/Card.css'
import { Link } from 'react-router-dom'



function Card( {cover, location, id, title} ) {
    return (
        <Link className='card--link' to={`/logement/${id}`}>

            <article className='card'>
                <img className='card-image' src={cover} alt={title} />
                <div className='title-card'>
                    <h3 className='card--title'>{title}</h3>
                    <p>{location}</p>
                </div>
            </article>

        </Link> 
    )
}

export default Card