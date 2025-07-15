import { Routes, Route } from "react-router-dom"
import Home from "./assets/pages/Home"
import SobreMin from "./assets/pages"
import Conhecimentos from "./assets/pages/Conhecimentos"
import Projetos from "./assets/pages/Projetos"
import Contatos from "./assets/pages/Contatos"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/SobreMin" element={ <SobreMin /> } />
        <Route path="/Conhecimentos" element={ <Conhecimentos /> } />
        <Route path="/Projetos" element={ <Projetos /> } />
        <Route path="/Contatos" element={ <Contatos /> } />
        <Route path="*" element={ <Home /> } />
      </Routes>
    </>    
  )
}

export default App
