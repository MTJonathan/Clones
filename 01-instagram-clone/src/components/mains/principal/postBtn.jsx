import React from 'react'
import { Notificaciones, Mensaje, IconoCompartir, GuardadosSvg } from '../../navegacion/iconos'
const PostBtn = () => {
  return (
    <div className="postBtn">
      <div className="principales">
        <span className='corazon'>
            <span className='corazonDesabled'><Notificaciones /></span>
            <span className='corazonActive'></span>
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
