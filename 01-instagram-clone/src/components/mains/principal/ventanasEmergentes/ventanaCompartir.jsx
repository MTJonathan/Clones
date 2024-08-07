import { ItemCompartir } from "./ItemCompartir";
import { CerrarSvg } from "../../../navegacion/iconos";
import { usuariosCompartir } from "../JS/itemCompartir";
import '../../../../assets/css/mains/principal/ventanaCompartir.css'
const VentanaCompartir = ({className, handleClick}) => {
  return (
    <aside className={className} onClick={handleClick}>
      <div className="ventanaCompartirContainer" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>Compartir</h2>
          <span onClick={handleClick}><CerrarSvg /></span>
        </header>
        <form>
          <label for="compartir">
            Para: <input type="text" id="compartir" placeholder="Busca..." />
          </label>
        </form>
        <article className="sugerenciasCompartir">
          <h3>Sugerencias</h3>
          <ul>
            {usuariosCompartir.map((user) => (
              <ItemCompartir key={user.user} user={user.user} userName={user.userName} img={user.img} />
            ))}
          </ul>
        </article>
        <footer>
          <button>Enviar</button>
        </footer>
      </div>
    </aside>
  );
};

export default VentanaCompartir;
