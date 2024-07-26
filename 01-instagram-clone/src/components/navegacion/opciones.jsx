function Opciones({icono, txt, iconoActive, handleClick}) {
    return(
        <>
            <div className="opcionNav" onClick={handleClick}>
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