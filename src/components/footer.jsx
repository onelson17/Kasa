import '../css/Footer.css'
import Logofooter from '../assets/footer_logo.png'
function Footer() {
    return (
       <footer className='footer-contain'>
         <div className='footer'>
                <img className='logo-footer' src={Logofooter} alt="Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
        </div>
       </footer>
    )
}


export default Footer