import React, { useState } from 'react'
import { Icono3puntos } from '../../navegacion/iconos'
import OpcionesPost from './ventanasEmergentes/opcionesPost'
const PostInfo = ({ img, user, lugar, tiempo }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    if (active) {
      document.body.classList.remove("modal-abierto");
    }else {
      document.body.classList.add("modal-abierto");
    }
    setActive(!active)
  }
  const className = active ? "opcionesPost" : "opcionesPostDesabled";
  return (
    <>
      <OpcionesPost className={className} handleClick={handleClick} setActive={setActive}/>
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
          <div className="icono" onClick={handleClick}>
            <Icono3puntos />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostInfo
