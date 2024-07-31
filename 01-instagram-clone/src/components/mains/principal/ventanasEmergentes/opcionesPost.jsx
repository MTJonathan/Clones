import React from 'react'
import '../../../../assets/css/mains/principal/opcionesPost.css'
const OpcionesPost = ({className, handleClick}) => {
  return (
    <aside className={className} onClick={handleClick}>
      <div className="opcionesPostContainer" onClick={(e) => e.stopPropagation()}>
        <ul>
            <li className='rojo'>Denunciar</li>
            <li className='rojo'>Dejar de seguir</li>
            <li>Añadir a favoritos</li>
            <li>Ir a la publicación</li>
            <li>Compartir en...</li>
            <li>Copiar enlace</li>
            <li>Código de inserción</li>
            <li>Información sobre esta cuenta</li>
            <li onClick={handleClick}>Cancelar</li>
        </ul>
      </div>
    </aside>
  )
}

export default OpcionesPost
