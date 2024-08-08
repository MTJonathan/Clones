import { Icono3puntos } from "../../../../navegacion/iconos"
const ComentarioInfo = ({ img, user, handleClickOpciones }) => {
  return (
    <header className="comentarioInfo">
      <div className="imgPerfilComentario">
        <img src={img} alt={`${user} perfil`} />
      </div>
      <div className="userComentario">
        <span>{user}</span>
      </div>
      <span className="opcionesComentario" onClick={handleClickOpciones}><Icono3puntos /></span>
    </header>
  )
}

export default ComentarioInfo
