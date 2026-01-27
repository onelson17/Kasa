import { useState } from 'react'
import Leftarrow from '../assets/left-arrow.png'
import Rightarrow from '../assets/right-arrow.png'
import '../css/Slider.css'

function Slider ({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const totalPictures = pictures.length

    const nextSlide = () => {
        setCurrentIndex(currentIndex === totalPictures - 1 ? 0 : currentIndex + 1)
    }
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? totalPictures - 1 : currentIndex - 1)
    }
    
    return (
        <div className='slider'>
            <img src={pictures[currentIndex]} alt="Logement" className='slider--image'/>
            {totalPictures > 1 && (
                <>
                    <div className='arrows arrow-left' onClick={prevSlide}>
                        <img src={Leftarrow} alt="Précédent" />
                    </div>
                    <div className='arrows arrow-right' onClick={nextSlide}>
                        <img src={Rightarrow} alt="Suivant" />
                    </div>
                    <span className='counter-slider'> 
                    {currentIndex + 1} / {totalPictures}
                    </span>
                </>
            )}
        </div>
    )
}

export default Slider