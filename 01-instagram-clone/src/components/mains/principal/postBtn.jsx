import React, { useState } from 'react'
import { Notificaciones, Mensaje, IconoCompartir, GuardadosSvg, CorazonActiveSvg } from '../../navegacion/iconos'
const PostBtn = () => {
    const [corazon, setCorazon] = useState(false)
    const classCorazon = corazon ? 'corazonActive' : 'corazonDesabled'
    const classCorazon2 = corazon ? 'corazonDesabled' : 'corazonActive'
  return (
    <div className="postBtn">
      <div className="principales">
        <span className='corazon' onClick={() => setCorazon(!corazon)}>
            <span className={classCorazon2}><Notificaciones /></span>
            <span className={classCorazon + ' corazonFill'}><CorazonActiveSvg /></span>
        </span>
        <IconoCompartir />
        <Mensaje />
      </div>
      <div className="secundarios">
        <GuardadosSvg />
      </div>
    </div>
  )
}

export default PostBtn
