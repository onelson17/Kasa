import '../css/Footer.css'
import Logofooter from '../assets/footer_logo.png'
function Footer() {
    return (
        <div className='footer'>
            <img src={Logofooter} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}


export default Footer