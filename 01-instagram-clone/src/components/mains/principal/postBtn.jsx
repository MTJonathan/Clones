import React, { useState } from 'react'
import { CorazonSvg, Mensaje, IconoCompartir, GuardadosSvg, CorazonActiveSvg, GuardarActiveSvg } from '../../navegacion/iconos'
const PostBtn = () => {
    const [corazon, setCorazon] = useState(false)
    const [compartir, setCompartir] = useState(false)

    const classCompartir = compartir ? 'compartirActive' : 'compartirDesabled'
    const classCompartir2 = compartir ? 'compartirDesabled' : 'compartirActive'
    const classCorazon = corazon ? 'corazonActive' : 'corazonDesabled'
    const classCorazon2 = corazon ? 'corazonDesabled' : 'corazonActive'
  return (
    <div className="postBtn">
      <div className="principales">
        <span className='corazon' onClick={() => setCorazon(!corazon)}>
            <span className={classCorazon2}><CorazonSvg /></span>
            <span className={classCorazon + ' corazonFill'}><CorazonActiveSvg /></span>
        </span>
        <IconoCompartir />
        <Mensaje />
      </div>
      <div className="secundarios">
        <span className="guardar" onClick={() => setCompartir(!compartir)}>
            <span className={classCompartir2}><GuardadosSvg /></span>
            <span className={classCompartir}><GuardarActiveSvg /></span>
        </span>
      </div>
    </div>
  )
}

export default PostBtn
