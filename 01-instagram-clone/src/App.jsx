import React from 'react'
import './assets/css/App.css'
import Navegacion from './components/navegacion/navegacion.jsx'  
import Principal from './components/mains/principal.jsx'
import Sugerencias from './components/sugerencias.jsx'
function App() {
  return (
    <>
      <Navegacion />
      <Principal />
      <Sugerencias />
    </>
  )
}

export default App
