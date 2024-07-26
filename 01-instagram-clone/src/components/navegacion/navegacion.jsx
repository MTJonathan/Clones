import React from 'react'
import { useState } from 'react'
import '../../assets/css/navegacion/navegacion.css'
import { Letra, Inicio, Busqueda, Explorar, Reels, Mensaje, Notificaciones, Crear, ImgPerfil, Menu } from './iconos.jsx'
import { InicioActive, ExplorarActive, ReelsActive, MensajeActive, LogoResposive } from './iconosActive.jsx'
import Opciones from './opciones.jsx'
import {NavLinks} from './navLinks.jsx'
import { CrearOpciones } from './crearOpciones.jsx'
function Navegacion() {
    const [classCreate, setClassCreate] = useState(false)
    const handleClickCrear = () => {
        setClassCreate(!classCreate)
    }
    
    const txtClassCrate = classCreate ? 'crearOpciones' : 'noMostrarCrear'
    return(
        <>
            <aside className='navegacion'>
                <div className="navegacionContainer">
                    <Letra />
                    <LogoResposive/>
                    <nav>
                        <NavLinks to='/'><Opciones icono={<Inicio/>} iconoActive={<InicioActive/>} txt="Inicio"/></NavLinks>
                        <Opciones icono={<Busqueda/>} txt="Busqueda"/>
                        <NavLinks to='/explorer'><Opciones icono={<Explorar/>} iconoActive={<ExplorarActive/>} txt="Explorar"/></NavLinks>
                        <NavLinks to='/reels'><Opciones icono={<Reels/>} iconoActive={<ReelsActive/>} txt="Reels"/></NavLinks>
                        <NavLinks to='/messenger'><Opciones icono={<Mensaje/>} iconoActive={<MensajeActive/>} txt="Mensajes"/></NavLinks>
                        <Opciones icono={<Notificaciones/>} txt="Notificaciones"/>
                        <Opciones icono={<Crear/>} handleClick={handleClickCrear}  txt="Crear"/>
                        <CrearOpciones classPrincipal={txtClassCrate}/>
                        <Opciones icono={<ImgPerfil/>} txt="Perfil"/>
                        <Opciones icono={<Menu/>} txt="Más"/>
                    </nav>
                </div>
                
            </aside>
        </>
    )
}

export default Navegacion
