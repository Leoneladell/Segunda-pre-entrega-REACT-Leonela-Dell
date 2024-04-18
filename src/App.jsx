import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/Navbar.jsx"
import Footer from "./componentes/Footer.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import ItemDetailContainer from "./componentes/ItemDetailContainer.jsx"


function App() {
  

  return (
    <Router>
      <NavBar/>
     
      <Routes>
      <Route path="/"element={<ItemListContainer greeting="Bienvenidos a nuestra tienda On-line"/>}/>
      <Route path="/productos/:productosId" element={<ItemListContainer/>}/>
      <Route path="/producto/:productoId" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App