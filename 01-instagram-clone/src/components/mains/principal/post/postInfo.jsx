import { Icono3puntos } from '../../../navegacion/iconos'
import OpcionesPost from '../ventanasEmergentes/opcionesPost'
const PostInfo = ({ img, user, lugar, tiempo, active, handleClick, setActive }) => {
  const className = active ? "opcionesPost" : "opcionesPostDesabled";
  return (
    <>
      <OpcionesPost className={className} handleClick={handleClick} setActive={setActive}/>
      <header className="postInfo">
        <div className="imgPostInfo">
          <img src={img} alt={user} />
        </div>
        <div className="usarioPostInfo">
          <div className="usuario">
            <span className='userPostInfo'>{user}</span>
            <li><span> • </span>{tiempo}</li>
          </div>
          <div className="lugar">
            <span>{lugar}</span>
          </div>
        </div>
        <span className="icono" onClick={handleClick}>
            <Icono3puntos />
        </span>
      </header>
    </>
  )
}

export default PostInfo
