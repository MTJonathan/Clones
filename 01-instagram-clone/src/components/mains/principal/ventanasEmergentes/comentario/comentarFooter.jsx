import {
  CorazonSvg,
  CorazonActiveSvg,
  IconoComentar,
  Mensaje,
  GuardadosSvg,
  GuardarActiveSvg,
  CaraSvg
} from "../../../../navegacion/iconos";
import { useId } from "react";
const ComentarFooter = ({
  classCorazon,
  classCorazon2,
  classGuardar,
  classGuardar2,
  handleClickCorazon,
  handleClickGuardar,
  handleClickCompartir,
  countCorazon,
  tiempo,
}) => {
  const idInput = useId();
  return (
    <footer className="comentarFooter">
      <section className="comentarBtn">
        <div className="principales">
          <span onClick={handleClickCorazon}>
            <span className={classCorazon2}>
              <CorazonSvg />
            </span>
            <span className={classCorazon + " corazonFill"}>
              <CorazonActiveSvg />
            </span>
          </span>
          <label htmlFor={idInput}>
            <IconoComentar />
          </label>
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
      </section>
      <section className="infoComentarBtn">
        <div className="corazones">
          <span>{countCorazon} Me Gusta</span>
          <span>Hace {tiempo}</span>
        </div>
      </section>
      <form className="comentarForm">
        <span><CaraSvg /></span>
        <input type="text" id={idInput} placeholder="Añade un comentario..."/>
        <span>Publicar</span>
      </form>
    </footer>
  );
};

export default ComentarFooter;
