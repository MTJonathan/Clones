import '../../assets/css/sugerencias/ventanaEmergente.css'
export function VentanaEmergente({btnCancelar, user, desactivarVentana, dejarDeSeguir}) {
    return(
        <>
            <aside className={btnCancelar} onClick={desactivarVentana}>
                <article className="ventanaEmergenteContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="ventanaEmergenteImg">
                        <img src={`https://unavatar.io/${user}`} alt="" />
                    </div>
                    <div className="txtVentanaEmergente">
                        <span>¿Dejar de seguir a {user}?</span>
                    </div>
                    <div className="btnVentanaEmergente">
                        <button onClick={dejarDeSeguir}>Dejar de seguir</button>
                        <button onClick={desactivarVentana}>Cancelar</button>
                    </div>
                </article>
            </aside>
        </>
    )
}