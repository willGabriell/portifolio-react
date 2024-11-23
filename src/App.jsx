import './App.css'
import Cabecalho from './components/Cabecalho/Cabecaho'
import Projetos from './components/Projetos/Projetos'

import Rodape from './components/Rodape/Rodape'

function App() {

  return (
    <div className="app-container">
      <Cabecalho />
      <div className="main-content">
        <Projetos />
      </div>
      <Rodape />
    </div>
  )
}

export default App
