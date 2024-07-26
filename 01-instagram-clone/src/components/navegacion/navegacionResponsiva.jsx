import { NavLinks } from "./navLinks"
import Opciones from "./opciones"
import { useState, useEffect, useRef } from "react"
import { Inicio, Explorar, Reels, Mensaje, Crear, ImgPerfil } from './iconos.jsx'
import { InicioActive, ExplorarActive, ReelsActive, MensajeActive } from './iconosActive.jsx'
import { CrearOpciones } from "./crearOpciones.jsx"
export const NavegacionResponse = () =>{
    const [classCreate, setClassCreate] = useState(false)
    const crearOpcionesRef = useRef(null)
    const btnCrearRef = useRef(null)
    const handleClickCrear = (event) => {
        event.stopPropagation()
        setClassCreate(!classCreate)
    }
    const handleClickOutside = (event) => {
        if (crearOpcionesRef.current && !crearOpcionesRef.current.contains(event.target) && btnCrearRef.current && !btnCrearRef.current.contains(event.target)) {
            setClassCreate(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const txtClassCrate = classCreate ? 'crearOpciones crearOpcionesResponsive' : 'noMostrarCrear'
    return(
        <>
            <nav className="navegacionResponsiva">
                <ul>
                    <li><NavLinks to='/'><Opciones icono={<Inicio/>} iconoActive={<InicioActive/>} txt="Inicio"/></NavLinks></li>
                    <li><NavLinks to='/explorer'><Opciones icono={<Explorar/>} iconoActive={<ExplorarActive/>} txt="Explorar"/></NavLinks></li>
                    <li><NavLinks to='/reels'><Opciones icono={<Reels/>} iconoActive={<ReelsActive/>} txt="Reels"/></NavLinks></li>
                    <li><Opciones icono={<Crear/>} handleClick={handleClickCrear} ref={btnCrearRef} txt="Crear"/></li>
                    <CrearOpciones classPrincipal={txtClassCrate} ref={crearOpcionesRef}/>
                    <li><NavLinks to='/messenger'><Opciones icono={<Mensaje/>} iconoActive={<MensajeActive/>} txt="Mensajes"/></NavLinks></li>
                    <li><NavLinks to='/profile'><Opciones icono={<ImgPerfil/>} iconoActive={<ImgPerfil/>} txt="Perfil"/></NavLinks></li>
                </ul>
            </nav>
        </>
    )
}