import { VentanaEmergente } from './ventanaEmergente'
import { perfilesHook } from './Hooks/perfiles';
export function Perfiles({user,txt}) {
    const {handleFollow, DejarSeguir, desactivarVentana, txtBtn, btnClass, btnCancelar} = perfilesHook();
    return(
        <>
            <article className="perfilesMostras">
                <div className="imgPerfiles">
                    <img src={`https://unavatar.io/${user}`} alt="fotoPerfil"/>
                </div>
                <div className="txtPerfiles">
                    <span className="userPerfiles">{user}</span>
                    <span className="sugerenciaPerfiles">{txt}</span>
                </div>
                <div className="btnPerfiles">
                    <button className={btnClass} onClick={handleFollow}>{txtBtn}</button>
                </div>
            </article>
            <VentanaEmergente 
                btnCancelar={btnCancelar}
                user={user}
                desactivarVentana={desactivarVentana}
                dejarDeSeguir={DejarSeguir}
            />
        </>
    )
}
