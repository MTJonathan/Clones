import { ItemCompartir } from "./ItemCompartir";

const VentanaCompartir = () => {
  return (
    <aside className="ventanaCompartir">
      <div className="ventanaCompartirContainer">
        <header>
          <h2>Compartir</h2>
        </header>
        <form>
          <label for="compartir">
            <input type="text" id="compartir" placeholder="Busca..." />
          </label>
        </form>
        <article className="sugerenciasCompartir">
          <h3>Sugerencias</h3>
          <ul>
            <ItemCompartir/>
            <ItemCompartir/>
            <ItemCompartir/>
            <ItemCompartir/>
            <ItemCompartir/>
          </ul>
        </article>
      </div>
    </aside>
  );
};

export default VentanaCompartir;
