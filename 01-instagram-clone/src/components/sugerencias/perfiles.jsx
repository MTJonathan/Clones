export function Perfiles({user,txt, txtBtn}) {
    return(
        <>
            <article className="perfilesMostras">
                <div className="imgPerfiles">
                    <img src={`https://unavatar.io/${user}`} alt=""/>
                </div>
                <div className="txtPerfiles">
                    <span className="userPerfiles">{user}</span>
                    <span className="sugerenciaPerfiles">{txt}</span>
                </div>
                <div className="btnPerfiles">
                    <button>{txtBtn}</button>
                </div>
            </article>
        </>
    )
}
export function PerfilPrincipal({img,user,txt, txtBtn}) {
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
                    <button>{txtBtn}</button>
                </div>
            </article>
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
                    <a href="">Informacion</a> · <a href="">Ayuda</a> · <a href="">Prensa</a> · <a href="">API</a> · 
                    <a href="">Empleo</a> · <a href="">Privacidad</a> · <a href="">Condiciones</a> · <a href="">Ubicaciones</a>
                     · <a href="">Idioma</a> · <a href="">Meta Verified</a>
                </span>
                <span>
                    &copy; 2024 INSTAGRAM FROM META
                </span>
            </div>
        </>
    )
}