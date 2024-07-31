import {useState} from 'react'
import { VentanaEmergente } from './ventanaEmergente'
import { VentanaCambiar } from './ventanaCambiar';
export function Perfiles({user,txt}) {
    const [isFollowing, setIsFollowing] = useState(false)
    const [ventanaActiva, setVentanaActiva] = useState(false);
    const DejarSeguir = () => {
        setIsFollowing(false);
        setVentanaActiva(false);
    }
    const handleFollow = () => {
        if (isFollowing) {
            setVentanaActiva(true);
        } else {
            setIsFollowing(true);
        }
    }
    const desactivarVentana = () => {
        setVentanaActiva(false);
    };
    const txtBtn = isFollowing ? 'Seguiendo' : 'Seguir'
    const btnClass = isFollowing ? 'perfilesBtn perfilesBtnIsFollow' : 'perfilesBtn'
    const btnCancelar = ventanaActiva ? 'ventanaEmergente activeVentana' : 'ventanaEmergente';
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
export function PerfilPrincipal({img,user,txt, txtBtn}) {
    const [VentanaCambiarActive, setVentanaCambiarActive] = useState(false);
    const cerrarVentanaCambiar = () => {
        document.body.classList.remove("modal-abierto");
        setVentanaCambiarActive(false);
    }
    const activeVentanaCambiar = () => {
        document.body.classList.add("modal-abierto");
        setVentanaCambiarActive(true);
    }
    const ventanaCambiarClass = VentanaCambiarActive ? 'ventanaCambiar ventanaCambiarActive' : 'ventanaCambiar';
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
export function Separador(){
    return(
        <>
            <div className="separador">
                <div className="txtSeparador">
                    <span>Sugerencias para ti</span>
                </div>
                <div className="btnSeparador">
                    <button>Ver todo</button>
                </div>
            </div>
        </>
    )
}
export function Informacion(){
    return(
        <>
            <div className="informacionPerfiles">
                <span>
                    <a href="https://about.instagram.com/" target="_blank">Informacion</a> · 
                    <a href="https://help.instagram.com/" target="_blank">Ayuda</a> · 
                    <a href="https://about.instagram.com/blog" target="_blank">Prensa</a> · 
                    <a href="https://developers.facebook.com/docs/instagram-platform" target="_blank">API</a> · 
                    <a href="https://about.instagram.com/about-us/careers" target="_blank">Empleo</a> · 
                    <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" target="_blank">Privacidad</a> · 
                    <a href="https://help.instagram.com/581066165581870/" target="_blank">Condiciones</a> · 
                    <a href="https://www.instagram.com/explore/locations/" target="_blank">Ubicaciones</a> · 
                    <a href="" target="_blank">Idioma</a> · 
                    <a href="" target="_blank">Meta Verified</a>
                </span>
                <span>
                    &copy; 2024 INSTAGRAM FROM META
                </span>
            </div>
        </>
    )
}