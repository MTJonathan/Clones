import React from 'react'
import Sugerencias from '../sugerencias/sugerencias'
import '../../assets/css/mains/principal/principal.css'
import Storys from './principal/storys'
import Publicacion from './principal/publicacion'
function Principal() {
    return (
        <>
            <main className='principal'>
                <div className="contenidoPrincipal">
                   <Storys />
                   <Publicacion />
                </div>
                <Sugerencias />
            </main>
        </>
    )
}
export default Principal
