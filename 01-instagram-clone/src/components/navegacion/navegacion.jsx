import '../../assets/css/navegacion/navegacion.css'
import { Letra, Inicio, Busqueda, Explorar, Reels, Mensaje, Notificaciones, Crear, ImgPerfil, Menu } from './iconos.jsx'
import { InicioActive, ExplorarActive, ReelsActive, MensajeActive, LogoResposive, NotificacionesActive } from './iconosActive.jsx'
import Opciones from './opciones.jsx'
import {NavLinks} from './navLinks.jsx'
import { CrearOpciones } from './crearOpciones.jsx'
import { MasOpciones } from './masOpciones.jsx'
import { navegacionHooks } from './Hooks/navegacion.js'
import { navegacionMasHooks } from './Hooks/navegacionMas.js'
function Navegacion() {
    const { crearOpcionesRef, btnCrearRef, txtClassCreate, handleClickCrear } = navegacionHooks()
    const { masOpcionesRef, btnMasRef, txtClassMas, handleClickMas } = navegacionMasHooks()
    
    return(
        <>
            <aside className='navegacion'>
                <div className="navegacionContainer">
                    <nav>
                        <Letra />
                        <LogoResposive/>
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
                    </nav>
                </div>
            </aside>
            <MasOpciones ref={masOpcionesRef} classPrincipal={txtClassMas}/>
        </>
    )
}

export default Navegacion
