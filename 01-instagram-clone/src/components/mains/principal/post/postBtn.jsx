import {
  CorazonSvg,
  Mensaje,
  IconoComentar,
  GuardadosSvg,
  CorazonActiveSvg,
  GuardarActiveSvg,
} from "../../../navegacion/iconos";
import VentanaCompartir from "../ventanasEmergentes/ventanaCompartir";
import VentanaComentar from "../ventanasEmergentes/comentario/ventanaComentar";
const PostBtn = ({
  handleClickGuardar,
  handleClickCorazon,
  handleClickCompartir,
  handleClickComentar,
  handleClickOpciones,
  handleDoubleClick,
  selectedUsers,
  handleCheckboxChange,
  isAnyCheckboxSelected,
  corazon,
  guardar,
  compartir,
  imgPrincipal,
  comentar,
  img,
  user,
  txt,
  countCorazon,
  tiempo,
  meGusta,
}) => {
  const classGuardar = guardar ? "guardarActive" : "guardarDesabled";
  const classGuardar2 = guardar ? "guardarDesabled" : "guardarActive";
  const classCorazon = corazon ? "corazonActive" : "corazonDesabled";
  const classCorazon2 = corazon ? "corazonDesabled" : "corazonActive";
  const classCompartir = compartir ? "compartirActive" : "compartirDesabled";
  const classComentar = comentar ? "ventanaComentarActive" : "ventanaComentarDesabled";
  return (
    <>
      <VentanaComentar 
        classComentar={classComentar} 
        imgPrincipal={imgPrincipal} 
        handleClickComentar={handleClickComentar} 
        handleClickCorazon={handleClickCorazon}
        handleClickGuardar={handleClickGuardar}
        handleClickCompartir={handleClickCompartir}
        handleDoubleClick={handleDoubleClick}
        img={img}
        user={user}
        handleClickOpciones={handleClickOpciones}
        comentario={txt}
        tiempo={tiempo}
        countCorazon={countCorazon}
        classCorazon={classCorazon}
        classCorazon2={classCorazon2}
        classGuardar={classGuardar}
        classGuardar2={classGuardar2}
        meGusta={meGusta}
      />
      <div className="postBtn">
        <div className="principales">
          <span className="corazon" onClick={handleClickCorazon}>
            <span className={classCorazon2}>
              <CorazonSvg />
            </span>
            <span className={classCorazon + " corazonFill"}>
              <CorazonActiveSvg />
            </span>
          </span>
          <span onClick={handleClickComentar}>
            <IconoComentar />
          </span>
          <span onClick={handleClickCompartir}>
            <Mensaje />
          </span>
        </div>
        <div className="secundarios">
          <span className="guardar" onClick={handleClickGuardar}>
            <span className={classGuardar2}>
              <GuardadosSvg />
            </span>
            <span className={classGuardar}>
              <GuardarActiveSvg />
            </span>
          </span>
        </div>
      </div>
      <VentanaCompartir
        className={classCompartir}
        handleClick={handleClickCompartir}
        selectedUsers={selectedUsers}
        handleCheckboxChange={handleCheckboxChange}
        isAnyCheckboxSelected={isAnyCheckboxSelected}
      />
    </>
  );
};

export default PostBtn;
