import { postBtnHooks } from "./Hooks/postBtn";
import {
  CorazonSvg,
  Mensaje,
  IconoCompartir,
  GuardadosSvg,
  CorazonActiveSvg,
  GuardarActiveSvg,
} from "../../../navegacion/iconos";
const PostBtn = ({ count, setCount }) => {
  const {
    classCompartir,
    classCompartir2,
    classCorazon,
    classCorazon2,
    handleClickGuardar,
    handleClickCorazon,
  } = postBtnHooks();
  
  return (
    <div className="postBtn">
      <div className="principales">
        <span className="corazon" onClick={() => handleClickCorazon(setCount, count)}>
          <span className={classCorazon2}>
            <CorazonSvg />
          </span>
          <span className={classCorazon + " corazonFill"}>
            <CorazonActiveSvg />
          </span>
        </span>
        <IconoCompartir />
        <Mensaje />
      </div>
      <div className="secundarios">
        <span className="guardar" onClick={handleClickGuardar}>
          <span className={classCompartir2}>
            <GuardadosSvg />
          </span>
          <span className={classCompartir}>
            <GuardarActiveSvg />
          </span>
        </span>
      </div>
    </div>
  );
};

export default PostBtn;
