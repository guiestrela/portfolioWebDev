import { Routes, Route } from "react-router-dom"
import Home from "./assets/pages/Home"
import SobreMin from "./assets/pages"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/SobreMin" element={ <SobreMin /> } />
        <Route path="*" element={ <Home /> } />
      </Routes>
    </>    
  )
}

export default App
