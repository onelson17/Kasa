import '../css/Banner.css'

function Banner({ image, texte }) {
    return (
        <div className='banner'>
            <img src={image} alt="Bannière" className='banner-img' />
            {
                texte && <h1 className='bannerTitle'>{texte}</h1>
            }
        </div>
    )
}

export default Banner 