import React, { forwardRef } from 'react';

const Opciones = forwardRef(({ icono, txt, iconoActive, handleClick }, ref) => {
    return (
        <>
            <div className="opcionNav" onClick={handleClick} ref={ref}>
                <div className="opcionItem svgOpcion">
                    <span className="iconoOpcionDisabled">{icono}</span>
                    <span className="iconoOpcionActive">{iconoActive}</span>
                </div>
                <div className="opcionItem txtOpcion">
                    {txt}
                </div>
            </div>
        </>
    );
});

export default Opciones;
