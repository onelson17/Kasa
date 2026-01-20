import  '../css/Header.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import { NavLink  } from 'react-router-dom'

function Header() {
    return (
       <header className='header'>
            <div>
                <img src={logo} alt="Kasa" />
            </div>
            <nav className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
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