import  '../css/Header.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import { NavLink  } from 'react-router-dom'

function Header() {
    return (
       <header className='header'>
            <div>
               <Link to="/"><img className='logo' src={logo} alt="Kasa" /></Link>
            </div>
            <nav className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/" end>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">À propos</NavLink>
                    </li>
                    
                </ul>
            </nav>

       </header>
   
    )
}


export default Header