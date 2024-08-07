import { postBtnHooks } from "./Hooks/postBtn";
import {
  CorazonSvg,
  Mensaje,
  IconoComentar,
  GuardadosSvg,
  CorazonActiveSvg,
  GuardarActiveSvg,
} from "../../../navegacion/iconos";
import VentanaCompartir from "../ventanasEmergentes/ventanaCompartir";
import { useState } from "react";
const PostBtn = ({ count, setCount }) => {
  const {
    classGuardar,
    classGuardar2,
    classCorazon,
    classCorazon2,
    handleClickGuardar,
    handleClickCorazon,
    classCompartir,
    handleClickCompartir,
  } = postBtnHooks(setCount, count);

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
      <VentanaCompartir className={classCompartir} handleClick={handleClickCompartir}/>
    </>
  );
};

export default PostBtn;
