import '../css/Collapse.css'
import Arrow from '../assets/Arrow.png'
import { useState } from 'react'

function Collapse({ title, texte }) {

    const [isOpen, setIsOpen] = useState(false)
    const iconCollapse = () => {
        setIsOpen(!isOpen)
    }

console.log(iconCollapse)
    return (
        <>
            <article  className='collapse'>
                <h2>{title}</h2>
                <img onClick={iconCollapse} src={Arrow} alt="Ouvrir" />
            </article>

            <div className='collapse--content'>
               {texte}
            </div>
        
        </>
    )
}

export default Collapse