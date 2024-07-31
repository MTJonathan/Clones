import React from "react";
const Item = ({ txt, img }) => {
  return (
    <li>
      <div className="imgCompartir">{img}</div>
      <div className="txtCompartir">{txt}</div>
    </li>
  );
}
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
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </ul>
        </article>
      </div>
    </aside>
  );
};

export default VentanaCompartir;
