import { NavLinks } from "./navLinks"
import Opciones from "./opciones"
import { Letra, Inicio, Busqueda, Explorar, Reels, Mensaje, Notificaciones, Crear, ImgPerfil, Menu } from './iconos.jsx'
import { InicioActive, ExplorarActive, ReelsActive, MensajeActive, LogoResposive } from './iconosActive.jsx'
export const NavegacionResponse = () =>{
    return(
        <>
            <nav className="navegacionResponsiva">
                <ul>
                    <li><NavLinks to='/'><Opciones icono={<Inicio/>} iconoActive={<InicioActive/>} txt="Inicio"/></NavLinks></li>
                    <li><NavLinks to='/explorer'><Opciones icono={<Explorar/>} iconoActive={<ExplorarActive/>} txt="Explorar"/></NavLinks></li>
                    <li><NavLinks to='/reels'><Opciones icono={<Reels/>} iconoActive={<ReelsActive/>} txt="Reels"/></NavLinks></li>
                    <li><Opciones icono={<Crear/>} txt="Crear"/></li>
                    <li><NavLinks to='/messenger'><Opciones icono={<Mensaje/>} iconoActive={<MensajeActive/>} txt="Mensajes"/></NavLinks></li>
                    <li><Opciones icono={<ImgPerfil/>} txt="Perfil"/></li>
                </ul>
            </nav>
        </>
    )
}