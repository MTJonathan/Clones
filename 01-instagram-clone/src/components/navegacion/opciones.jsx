function Opciones({icono, txt}) {
    return(
        <>
            <div className="opcionNav">
                <div className="opcionItem">
                    {icono}
                </div>
                <div className="opcionItem">
                    {txt}
                </div>
            </div>
        </>
    )
}
export default Opciones