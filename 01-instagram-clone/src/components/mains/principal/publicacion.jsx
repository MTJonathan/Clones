import React, { useState } from "react";
import Post from "./post";
import "../../../assets/css/mains/principal/publicacion.css";
import { publicacionesArray } from "../../../assets/JS/publicaciones";
const Publicacion = () => {
  const [publicaciones, setPublicaciones] = useState(publicacionesArray);
  return (
    <section className="publicaciones">
      {publicaciones.map((publicacion) => (
        <Post
          img={publicacion.img}
          user={publicacion.user}
          lugar={publicacion.lugar}
          imgPrincipal={publicacion.imgPrincipal}
          tiempo={publicacion.tiempo}
        />
      ))}
      <div className="espacio">
        <br /><br />
      </div>
    </section>
  );
};

export default Publicacion;
