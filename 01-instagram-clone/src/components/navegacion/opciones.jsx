function Opciones({icono, txt, iconoActive}) {
    return(
        <>
            <div className="opcionNav">
                <div className="opcionItem svgOpcion">
                    <span className="iconoOpcionDisabled">{icono}</span>
                    <span className="iconoOpcionActive">{iconoActive}</span>
                </div>
                <div className="opcionItem txtOpcion">
                    {txt}
                </div>
            </div>
        </>
    )
}
export default Opciones