import { perfilPrincipalhook } from './Hooks/perfilPrincipal';
import { VentanaCambiar } from './ventanaCambiar';
export function PerfilPrincipal({img,user,txt, txtBtn}) {
    const{cerrarVentanaCambiar, activeVentanaCambiar, ventanaCambiarClass} = perfilPrincipalhook();
    return(
        <>
            <article className="perfilesMostras">
                <div className="imgPerfiles">
                    <img src={img} alt=""/>
                </div>
                <div className="txtPerfiles">
                    <span className="userPerfiles">{user}</span>
                    <span className="sugerenciaPerfiles principalSugerencia">{txt}</span>
                </div>
                <div className="btnPerfiles">
                    <button className='perfilesBtn' onClick={activeVentanaCambiar}>{txtBtn}</button>
                </div>
            </article>
            <VentanaCambiar ventanaCambiarClass={ventanaCambiarClass} desactivarVentana={cerrarVentanaCambiar} />
        </>
    )
}