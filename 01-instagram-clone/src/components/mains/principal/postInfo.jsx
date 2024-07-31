import React from 'react'
import { Icono3puntos } from '../../navegacion/iconos'
const PostInfo = ({img, user, lugar, tiempo}) => {
  return (
    <div className="postInfo">
        <div className="imgPostInfo">
          <img src={img} alt={user} />
        </div>
        <div className="usarioPostInfo">
          <div className="usuario">
            <span>{user}</span>
            <li><span> • </span>{tiempo}</li>
          </div>
          <div className="lugar">
            <span>{lugar}</span>
          </div>
          <div className="icono">
            <Icono3puntos />
          </div>
        </div>
      </div>
  )
}

export default PostInfo
