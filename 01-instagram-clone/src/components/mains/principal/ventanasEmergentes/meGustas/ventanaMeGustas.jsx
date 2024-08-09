import '../../../../../assets/css/mains/principal/ventanaMeGustas.css'
import UsuariosMeGusta from './usuariosMeGusta';
import usuariosMeGusta from '../../JS/usuariosMeGustaLista';
import { CerrarSvg } from '../../../../navegacion/iconos';
const VentanaMeGustas = ({ meGustas, handleClickMeGustas }) => {
  const classMeGustasss = meGustas ? "ventanaMeGustasActive" : "ventanaMeGustasDesactive";
  return (
    <aside className={classMeGustasss} onClick={handleClickMeGustas}>
      <section className="ventanaMeGustasContainer" onClick={(e) => e.stopPropagation()}>
        <header>
            <h2>Me gusta</h2><span onClick={handleClickMeGustas}><CerrarSvg /></span>
        </header>
        <section className="usuariosMeGusta">
          {usuariosMeGusta.map((user) => (
            <UsuariosMeGusta img={user.img} user={user.user} userName={user.userName} />
          ))}
        </section>
      </section>
    </aside>
  );
};

export default VentanaMeGustas;
