import { NavLinks } from "./navLinks"
import Opciones from "./opciones"
import { useState } from "react"
import { Inicio, Explorar, Reels, Mensaje, Crear, ImgPerfil } from './iconos.jsx'
import { InicioActive, ExplorarActive, ReelsActive, MensajeActive } from './iconosActive.jsx'
import { CrearOpciones } from "./crearOpciones.jsx"
export const NavegacionResponse = () =>{
    const [classCreate, setClassCreate] = useState(false)
    const handleClickCrear = () => {
        setClassCreate(!classCreate)
    }

    const txtClassCrate = classCreate ? 'crearOpciones crearOpcionesResponsive' : 'noMostrarCrear'
    return(
        <>
            <nav className="navegacionResponsiva">
                <ul>
                    <li><NavLinks to='/'><Opciones icono={<Inicio/>} iconoActive={<InicioActive/>} txt="Inicio"/></NavLinks></li>
                    <li><NavLinks to='/explorer'><Opciones icono={<Explorar/>} iconoActive={<ExplorarActive/>} txt="Explorar"/></NavLinks></li>
                    <li><NavLinks to='/reels'><Opciones icono={<Reels/>} iconoActive={<ReelsActive/>} txt="Reels"/></NavLinks></li>
                    <li><Opciones icono={<Crear/>} handleClick={handleClickCrear} txt="Crear"/></li>
                    <CrearOpciones classPrincipal={txtClassCrate}/>
                    <li><NavLinks to='/messenger'><Opciones icono={<Mensaje/>} iconoActive={<MensajeActive/>} txt="Mensajes"/></NavLinks></li>
                    <li><Opciones icono={<ImgPerfil/>} txt="Perfil"/></li>
                </ul>
            </nav>
        </>
    )
}