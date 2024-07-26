import { PublicacionSvg, DirectoSvg } from "./iconos"
import "../../assets/css/navegacion/crearOpciones.css"
export const CrearOpciones = ({classPrincipal}) => {
    return(
        <>
            <aside className={classPrincipal}>
                <article className="crearOpcionesContainer">
                    <div className="crearPublicacion">
                        <span className="txtPublicacion">Publicación</span>
                        <span className="svgPublicacion"><PublicacionSvg /></span>
                    </div>
                    <div className="crearDirecto">
                        <span className="txtDirecto">Video en directo</span> 
                        <span className="svgDirecto"><DirectoSvg /></span>                       
                    </div>
                </article>
            </aside>
        </>
    )
}