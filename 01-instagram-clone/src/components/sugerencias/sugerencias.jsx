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
                        user={"tina_120105"} 
                        txt={"Sugerencia para ti"} 
                        txtBtn={"Seguir" }
                    />
                    <Perfiles 
                        user={"claec.edu.do"} 
                        txt={"Sugerencia para ti"} 
                        txtBtn={"Seguir" }
                    />
                    <Perfiles
                        user={"cruwkkk"} 
                        txt={"Sugerencia para ti"} 
                        txtBtn={"Seguir" }
                    />
                    <Perfiles
                        user={"secretesz_tata"} 
                        txt={"Sugerencia para ti"} 
                        txtBtn={"Seguir" }
                    />
                    <Perfiles
                        user={"the.goodjack"} 
                        txt={"Sugerencia para ti"} 
                        txtBtn={"Seguir" }
                    />
                </div>
                <Informacion />
            </aside>
        </>
    )
}

export default Sugerencias
