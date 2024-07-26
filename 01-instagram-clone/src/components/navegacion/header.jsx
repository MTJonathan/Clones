import Opciones from "./opciones"
import { LetraCambiar } from "./iconos"
import { Notificaciones } from "./iconos"
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
                        <Opciones icono={<Notificaciones/>} txt="Notificaciones"/>
                    </div>
                </div>
            </header>
        </>
    )
}