import { BrowserRouter } from 'react-router-dom'
import Chemins from './components/Routeur.jsx'
import Layout  from './components/Layout.jsx'

function App() {

  return (
        <BrowserRouter>
          <Chemins />
        </BrowserRouter>
         
  )
}

export default App
