import {
  CorazonSvg,
  Mensaje,
  IconoComentar,
  GuardadosSvg,
  CorazonActiveSvg,
  GuardarActiveSvg,
} from "../../../navegacion/iconos";
import VentanaCompartir from "../ventanasEmergentes/ventanaCompartir";
const PostBtn = ({
  handleClickGuardar,
  handleClickCorazon,
  handleClickCompartir,
  selectedUsers,
  handleCheckboxChange,
  isAnyCheckboxSelected,
  corazon,
  guardar,
  compartir,
}) => {
  
  const classGuardar = guardar ? "guardarActive" : "guardarDesabled";
  const classGuardar2 = guardar ? "guardarDesabled" : "guardarActive";
  const classCorazon = corazon ? "corazonActive" : "corazonDesabled";
  const classCorazon2 = corazon ? "corazonDesabled" : "corazonActive";
  const classCompartir = compartir ? "compartirActive" : "compartirDesabled";
  return (
    <>
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
          <IconoComentar />
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
