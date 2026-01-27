import '../css/Collapse.css'
import Arrow from '../assets/Arrow.png'
import { useState } from 'react'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)
    const iconCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <section >
                <article  className='collapse'>
                    <h2>{title}</h2>
                    <img onClick={iconCollapse} src={Arrow} alt="Ouvrir" className={` arrow ${isOpen ? 'opened' : 'closed'} `}/>
                </article>

                <div className={` collapse--content ${isOpen ? 'content--open' : 'content--close'} `}>
                {content}
                </div>
            </section>
        
        </>
    )
}

export default Collapse