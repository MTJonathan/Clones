import Opciones from "./opciones"
import { LetraCambiar, Notificaciones } from "./iconos"
import { NotificacionesActive } from "./iconosActive"
import { NavLinks } from "./navLinks"
export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="headerContainer">
                    <div className="imgHeader">
                        <LetraCambiar/>
                    </div>
                    <div className="contenidoHeader">
                        <input type="search" placeholder="Buscar"/>
                        <NavLinks to={'notifications'}><Opciones icono={<Notificaciones/>} iconoActive={<NotificacionesActive/>} txt="Notificaciones"/></NavLinks>
                    </div>
                </div>
            </header>
        </>
    )
}