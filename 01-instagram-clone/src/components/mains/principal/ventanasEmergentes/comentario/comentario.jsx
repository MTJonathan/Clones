const Comentario = ({ img, user, comentario }) => {
  return (
    <article className="comentarioInfo comentarios">
      <div className="imgPerfilComentario">
        <img src={img} alt={`${user} perfil`} />
      </div>
      <div className="userComentario">
        <span>{user}</span> <span>{comentario}</span>
      </div>
    </article>
  );
};

export default Comentario;
