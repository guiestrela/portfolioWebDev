import { 
  Routes, 
  Route } 
  from "react-router-dom"
import Home from "./assets/pages/Home"
import SobreMin from "./assets/pages/SobreMin"
import Conhecimentos from "./assets/pages/Conhecimentos"
import Projetos from "./assets/pages/Projetos"
import Contatos from "./assets/pages/Contatos"
import NotFound from "./assets/pages/NotFound"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/SobreMin" element={ <SobreMin /> } />
        <Route path="/Conhecimentos" element={ <Conhecimentos /> } />
        <Route path="/Projetos" element={ <Projetos /> } />
        <Route path="/Contatos" element={ <Contatos /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>    
  )
}

export default App
