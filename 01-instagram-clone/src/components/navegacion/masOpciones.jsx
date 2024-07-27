import React, {forwardRef} from 'react'
import { ConfiguracionSvg, ActividadSvg, GuardadosSvg, CambiarAspectoSvg, InformarUnProblemaSvg, ThreadsSvg, CompartirSvg } from './iconos'
import "../../assets/css/navegacion/masOpciones.css"
export const MasOpciones = forwardRef(({classPrincipal}, ref) => {
    
    return(
        <>
            <aside className={classPrincipal} ref={ref}>
                <div className="masOpcionesContainer">
                    <div className="masOpcionesPrincipales">
                        <ul>
                            <li>
                                <span className="svgOpcionesPrincipales"><ConfiguracionSvg/></span>
                                <span className="txtOpcionesPrincipales">Configuración</span>
                            </li>
                            <li>
                                <span className="svgOpcionesPrincipales"><ActividadSvg/></span>
                                <span className="txtOpcionesPrincipales">Tu actividad</span>
                            </li>
                            <li>
                                <span className="svgOpcionesPrincipales"><GuardadosSvg/></span>
                                <span className="txtOpcionesPrincipales">Guardados</span>
                            </li>
                            <li>
                                <span className="svgOpcionesPrincipales"><CambiarAspectoSvg/></span>
                                <span className="txtOpcionesPrincipales">Cambiar aspecto</span>
                            </li>
                            <li>
                                <span className="svgOpcionesPrincipales"><InformarUnProblemaSvg/></span>
                                <span className="txtOpcionesPrincipales">Informar un problema</span>
                            </li>
                        </ul>
                    </div>
                    <div className="threads">
                        <ul>
                            <li>
                                <a href="https://www.threads.net/" target="_blank">
                                    <span className='svgThreads'><ThreadsSvg/></span>
                                    <span className='txtThreads'>Threads</span>
                                    <span className='svgCompartir'><CompartirSvg/></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="masOpcionesCambiar">
                        <ul>
                            <li>
                                <span className="txtOpcionesSecundarias">Cambiar de cuenta</span>
                            </li>
                        </ul>
                    </div>
                    <div className="masOpcionesSalir">
                        <ul>
                            <li>
                                <span className="txtOpcionesSecundarias">Salir</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
})