import { postInfoHook } from './Hooks/postInfo'
import { Icono3puntos } from '../../../navegacion/iconos'
import OpcionesPost from '../ventanasEmergentes/opcionesPost'
const PostInfo = ({ img, user, lugar, tiempo }) => {
  const { handleClick, className, setActive } = postInfoHook();
  return (
    <>
      <OpcionesPost className={className} handleClick={handleClick} setActive={setActive}/>
      <div className="postInfo">
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
          <div className="icono" onClick={handleClick}>
            <Icono3puntos />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostInfo
