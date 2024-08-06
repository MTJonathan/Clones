import { useState, useRef, useEffect } from 'react'
import '../../assets/css/navegacion/navegacion.css'
import { Letra, Inicio, Busqueda, Explorar, Reels, Mensaje, Notificaciones, Crear, ImgPerfil, Menu } from './iconos.jsx'
import { InicioActive, ExplorarActive, ReelsActive, MensajeActive, LogoResposive, NotificacionesActive } from './iconosActive.jsx'
import Opciones from './opciones.jsx'
import {NavLinks} from './navLinks.jsx'
import { CrearOpciones } from './crearOpciones.jsx'
import { MasOpciones } from './masOpciones.jsx'
import { navegacionHooks } from './Hooks/navegacion.js'
function Navegacion() {
    const { classCreate, setClassCreate, crearOpcionesRef, btnCrearRef, txtClassCreate, handleClickCrear } = navegacionHooks()
    
    const [classMas, setClassMas] = useState(false)
    const masOpcionesRef = useRef(null)
    const btnMasRef = useRef(null)
    const handleClickMas = () => {
        setClassMas(!classMas)
    }
    const handleClickOutsideMas = (event) => {
        if (masOpcionesRef.current && !masOpcionesRef.current.contains(event.target) && btnMasRef.current && !btnMasRef.current.contains(event.target)) {
            setClassMas(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideMas)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMas)
        }
    }, [])
    const txtClassMas = classMas ? 'masOpciones' : 'noMostrarMas'
    
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
                        <NavLinks to='/notifications'><Opciones icono={<Notificaciones/>} iconoActive={<NotificacionesActive/>} txt="Notificaciones"/></NavLinks>
                        <Opciones icono={<Crear/>} handleClick={handleClickCrear} ref={btnCrearRef} txt="Crear"/>
                        <CrearOpciones classPrincipal={txtClassCreate} ref={crearOpcionesRef}/>
                        <NavLinks to='/profile'><Opciones icono={<ImgPerfil/>} iconoActive={<ImgPerfil/>} txt="Perfil"/></NavLinks>
                        <Opciones icono={<Menu/>} ref={btnMasRef} txt="Más" handleClick={handleClickMas}/>
                        <MasOpciones ref={masOpcionesRef} classPrincipal={txtClassMas}/>
                    </nav>
                </div>
                
            </aside>
        </>
    )
}

export default Navegacion
