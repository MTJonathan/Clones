import React from "react";
import { idiomas } from "../../../assets/JS/idiomas";
import { footerEnlaces } from "../../../assets/JS/footerEnlaces";
const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="links">
        {footerEnlaces.map((enlace) => (
          <a href={enlace.enlace} target="_blank">
            {enlace.nombre}
          </a>
        ))}
      </div>
      <div className="otros">
        <select name="" id="">
          {idiomas.map((idioma) => (
            <option value={idioma.idioma}>{idioma.idioma}</option>
          ))}
        </select>
        <span>© 2022 Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default Footer;
