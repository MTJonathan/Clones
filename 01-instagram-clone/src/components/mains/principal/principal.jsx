import React from "react";
import Sugerencias from "../../sugerencias/sugerencias";
import "../../../assets/css/mains/principal/principal.css";
import Storys from "./Storys/storys";
import Publicacion from "./publicacion";
import Footer from "../404/footer";
import { Header } from "../../navegacion/header";
function Principal() {
  return (
    <>
      <Header />
      <main className="principal">
        <div className="contenidoPrincipal">
          <Storys />
          <Publicacion />
        </div>
        <Sugerencias />
        <Footer className={"footer footerSpan"} />
        <div className="espacio">
          <br /><br />
        </div>
      </main>
    </>
  );
}
export default Principal;
