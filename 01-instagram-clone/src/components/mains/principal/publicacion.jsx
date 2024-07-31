import React from "react";
import Post from "./post";
import "../../../assets/css/mains/principal/publicacion.css";
const Publicacion = () => {
  return (
    <section className="publicaciones">
      <Post
        img={"https://unavatar.io/luisitoeIpillo"}
        user={"luisitoComunica"}
        lugar={"CDMX"}
        imgPrincipal={
          "https://pbs.twimg.com/media/DsUnUPZW0AAbhjV.jpg:large"
        }
        tiempo={"1 hora"}
      />
      <Post
        img={"https://unavatar.io/acampossalazar"}
        user={"acampossalazar"}
        lugar={"Lima"}
        imgPrincipal={
          "https://i.pinimg.com/originals/30/28/0d/30280d34399ea2bb5effce0f55f705f7.jpg"
        }
        tiempo={"2 Meses"}
      />
      <Post
        img={"https://unavatar.io/FCBarcelona_es"}
        user={"FCBarcelona"}
        imgPrincipal={
          "https://cdn2.mediotiempo.com/uploads/media/2024/05/21/alexia-putellas-renovo-barcelona-ig.jpg"
        }
        tiempo={"1 Año"}
      />
      <Post
        img={"https://unavatar.io/paucubarsi33"}
        user={"PauCubarsi"}
        imgPrincipal={
          "https://i0.wp.com/produccionmercurio.s3.amazonaws.com/wp-media-folder-diario-el-mercurio/wp-content/uploads/2024/03/barca-3.jpg?fit=680%2C680&ssl=1"
        }
        tiempo={"1 Año"}
      />
      <br /><br />
    </section>
  );
};

export default Publicacion;
