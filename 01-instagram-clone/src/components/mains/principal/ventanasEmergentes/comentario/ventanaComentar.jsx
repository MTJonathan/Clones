import '../../../../../assets/css/mains/principal/ventanaComentar.css'
import { CerrarSvg, Corazon2Svg } from '../../../../navegacion/iconos'
import ComentarioInfo from './comentarioInfo'
import Comentario from './comentario'
import ComentarFooter from './comentarFooter'
const VentanaComentar = ({ 
  classComentar, 
  imgPrincipal, 
  handleClickComentar, 
  handleClickOpciones, 
  handleClickCorazon,
  handleClickGuardar,
  handleClickCompartir,
  handleDoubleClick,
  img, 
  user, 
  meGusta,
  comentario,
  classCorazon,
  countCorazon,
  tiempo,
  classCorazon2,
  classGuardar,
  classGuardar2
}) => {
  return (
    <aside className={classComentar} onClick={handleClickComentar}>
        <span className="cerrarComentar"><CerrarSvg /></span>
      <section className="ventanaComentarContainer" onClick={(e) => e.stopPropagation()}>
        <div className="imgComentar" onDoubleClick={handleDoubleClick}>
            <img src={imgPrincipal}/>
            <span className={meGusta ? "MeGustaActive" : undefined}>
              <Corazon2Svg />
            </span>
        </div>
        <article className="contenidoComentar">
          <ComentarioInfo img={img} user={user} handleClickOpciones={handleClickOpciones}/>
          <section className="comentariosContenido">
            <Comentario img={img} user={user} comentario={comentario}/>
          </section>
          <ComentarFooter 
            classCorazon={classCorazon} 
            classCorazon2={classCorazon2}
            handleClickCorazon={handleClickCorazon}
            handleClickGuardar={handleClickGuardar}
            handleClickCompartir={handleClickCompartir}
            classGuardar={classGuardar}
            classGuardar2={classGuardar2}
            countCorazon={countCorazon}
            tiempo={tiempo}
          />
        </article>
      </section>
    </aside>
  )
}

export default VentanaComentar
