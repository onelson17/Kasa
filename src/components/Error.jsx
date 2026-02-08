import { Link } from 'react-router-dom'
import '../css/Error.css'


function Error() {
    return (
    <div className="error-page">
        <h1 className="error--number">404</h1>
        <p className="error--text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error--redirection">
            Retourner sur la page d'accueil
        </Link>
    </div>
    )

}

export default Error