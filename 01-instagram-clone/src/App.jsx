import React from 'react'
import './assets/css/App.css'
import Navegacion from './components/navegacion/navegacion.jsx'  
import Principal from './components/mains/principal.jsx'
import {Explorarmain} from './components/mains/explorar.jsx'
import { ReelsMains } from './components/mains/reels.jsx'
import { MensajeMain } from './components/mains/mensajes.jsx'
import Sugerencias from './components/sugerencias/sugerencias.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import { NavegacionResponse } from './components/navegacion/navegacionResponsiva.jsx'
import { Header } from './components/navegacion/header.jsx'
function App() {
  return (
    <>
      <Navegacion />
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/explorer" element={<Explorarmain />} />
        <Route path="/reels" element={<ReelsMains />} />
        <Route path='/messenger' element={<MensajeMain />}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
      <NavegacionResponse />
      <Sugerencias />
    </>
  )
}

export default App
