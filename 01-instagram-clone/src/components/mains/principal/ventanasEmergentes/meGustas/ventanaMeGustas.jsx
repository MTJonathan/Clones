import '../../../../../assets/css/mains/principal/ventanaMeGustas.css'
import { CerrarSvg } from '../../../../navegacion/iconos';
const VentanaMeGustas = ({ meGustas, handleClickMeGustas }) => {
  const classMeGustasss = meGustas ? "ventanaMeGustasActive" : "ventanaMeGustasDesactive";
  return (
    <aside className={classMeGustasss} onClick={handleClickMeGustas}>
      <div className="ventanaMeGustasContainer" onClick={(e) => e.stopPropagation()}>
        <header>
            <h2>Me gusta</h2><span onClick={handleClickMeGustas}><CerrarSvg /></span>
        </header>
      </div>
    </aside>
  );
};

export default VentanaMeGustas;
