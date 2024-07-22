import React from 'react'
import '../../assets/css/navegacion/navegacion.css'
import {Letra, Inicio, Busqueda, Explorar, Reels, Mensaje, Notificaciones, Crear, ImgPerfil, Menu} from './iconos.jsx'
import Opciones from './opciones.jsx'
function Navegacion() {
    return(
        <>
            <aside className='navegacion'>
                <Letra />
                <nav>
                    <Opciones icono={<Inicio/>} txt="Inicio"/>
                    <Opciones icono={<Busqueda/>} txt="Busqueda"/>
                    <Opciones icono={<Explorar/>} txt="Explorar"/>
                    <Opciones icono={<Reels/>} txt="Reels"/>
                    <Opciones icono={<Mensaje/>} txt="Mensajes"/>
                    <Opciones icono={<Notificaciones/>} txt="Notificaciones"/>
                    <Opciones icono={<Crear/>} txt="Crear"/>
                    <Opciones icono={<ImgPerfil/>} txt="Perfil"/>
                    <Opciones icono={<Menu/>} txt="Más"/>
                </nav>
                
            </aside>
        </>
    )
}

export default Navegacion
