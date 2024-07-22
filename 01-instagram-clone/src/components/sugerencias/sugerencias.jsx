import React from 'react'
import {Perfiles, PerfilPrincipal, Separador, Informacion} from './perfiles'
import '../../assets/css/sugerencias/sugerencias.css'
import perfilIcono from '../../assets/img/navegacion/perfilIcono.jpg'
function Sugerencias() {
    return(
        <>
            <aside className='sugerencias'>
                <div className="PerfilPrincipal">
                    <PerfilPrincipal 
                        img={perfilIcono} 
                        user={"mtfoot32"} 
                        txt={"MTFoot32"} 
                        txtBtn={"Cambiar" }
                    />
                </div>
                <Separador />
                <div className="perfilesSugerencias">
                    <Perfiles 
                        user={"midudev"} 
                        txt={"Sugerencia para ti"}
                    />
                    <Perfiles 
                        user={"itshannaowo"} 
                        txt={"Sugerencia para ti"}
                    />
                    <Perfiles
                        user={"sergiecode"} 
                        txt={"Sugerencia para ti"} 
                    />
                    <Perfiles
                        user={"acampossalazar"} 
                        txt={"Sugerencia para ti"} 
                    />
                    <Perfiles
                        user={"fluminenseFC"} 
                        txt={"Sugerencia para ti"}
                    />
                </div>
                <Informacion />
            </aside>
        </>
    )
}

export default Sugerencias
