import React, { useState } from "react";
import Post from "./post/post";
import "../../../assets/css/mains/principal/publicacion.css";
import { publicacionesArray } from "./JS/publicaciones";
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
          txt={publicacion.txt}
        />
      ))}
    </section>
  );
};

export default Publicacion;
