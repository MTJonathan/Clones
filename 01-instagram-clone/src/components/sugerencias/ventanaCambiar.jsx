import { LetraCambiar } from "../navegacion/iconos"
import '../../assets/css/sugerencias/ventanaCambiar.css'
export function VentanaCambiar({ventanaCambiarClass, desactivarVentana}) {
    return(
        <>
            <aside className={ventanaCambiarClass} onClick={desactivarVentana}>
                <div className="ventanaCambiarContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="imgVentanaCambiar">
                        <LetraCambiar />
                    </div>
                    <form action="">
                        <input className="inputVentanaCambiar" type="text" placeholder="Telefono, usuario o correo electronico"/>
                        <input className="inputVentanaCambiar" type="text" placeholder="Contraseña"/>
                        <label htmlFor="recordar"><input id="recordar" type="checkbox"/>Guardar datos de inicio de sesión</label>
                        <button>Entrar</button>
                        <span><a href="#">¿Has olvidado la contraseña?</a></span>
                    </form>
                    <span className="cerrarVentanaCambiar" onClick={desactivarVentana}>✖</span>
                </div>
            </aside>
        </>
    )
}