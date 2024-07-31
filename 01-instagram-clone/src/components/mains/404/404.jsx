import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/404/404.css";
import Footer from "./footer";
const Pagina404 = () => {
  return (
    <main className="pagina404">
      <h1>Esta página no esta disponible</h1>
      <p>
        Es posible que el enlace que has seguido sea incorrecto o que se haya
        suprimido la página. <Link to="/">Volver a Instagram.</Link>
      </p>
      <Footer className={"footer"}/>
    </main>
  );
};

export default Pagina404;
