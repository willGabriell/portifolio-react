import './App.css'
import Cabecalho from './components/Cabecalho/Cabecaho'
import Inicio from './components/Inicio/Inicio'
import Projetos from './components/Projetos/Projetos'
import Rodape from './components/Rodape/Rodape'

function App() {

  return (
    <div className="app-container">
      <Cabecalho />
      <div className="main-content">
        <Inicio />
        <Projetos />
      </div>
      <Rodape />
    </div>
  )
}

export default App
