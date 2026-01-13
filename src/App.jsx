import { BrowserRouter } from 'react-router-dom'
import Chemins from './components/routeur.jsx'
import Layout  from './components/layout.jsx'

function App() {

  return (
        <Layout>
           <Chemins />
        </Layout>
  )
}

export default App
