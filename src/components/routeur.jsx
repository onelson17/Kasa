import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'
import Logement from '../pages/logement.jsx'
import Error from '../pages/notFound.jsx'



function Chemins() {

    return (
      <Router>
          <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "/About" element={<About />} />
                <Route path = "/Logement/:id" element={<Logement />} />
                <Route path = "*" element ={<Error />} />
          </Routes>
  </Router>
    )
  }
  
  export default Chemins
  