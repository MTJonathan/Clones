import { Letra } from "../navegacion/iconos"
import '../../assets/css/sugerencias/ventanaCambiar.css'
export function VentanaCambiar({ventanaCambiarClass, desactivarVentana}) {
    return(
        <>
            <aside className={ventanaCambiarClass}>
                <div className="ventanaCambiarContainer">
                    <div className="imgVentanaCambiar">
                        <Letra />
                    </div>
                    <form action="">
                        <input className="inputVentanaCambiar" type="text" placeholder="Telefono, usuario o correo electronico"/>
                        <input className="inputVentanaCambiar" type="text" placeholder="Contraseña"/>
                        <label htmlFor=""><input type="checkbox"/>Guardar datos de inicio de sesión</label>
                        <button>Entrar</button>
                        <span>¿Has olvidado la contraseña?</span>
                    </form>
                    <span className="cerrarVentanaCambiar" onClick={desactivarVentana}>✖</span>
                </div>
            </aside>
        </>
    )
}