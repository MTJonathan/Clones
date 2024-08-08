const Comentario = ({ img, user, comentario="" }) => {
  const getStyledText = (text) => {
    const parts = text.split(/([#@][\w-]+)/);
  
    return parts.map((part, index) => {
      if (part.startsWith("#")) {
        return (
          <span key={index} className="hashtag">
            {part}
          </span>
        );
      }
      if (part.startsWith("@")) {
        return (
          <span key={index} className="atTag">
            {part}
          </span>
        );
      }
      return part;
    });
  };
  return (
    <article className="comentarioInfo comentarios">
      <div className="imgPerfilComentario">
        <img src={img} alt={`${user} perfil`} />
      </div>
      <div className="userComentario">
        <span>{user}</span> <span>{getStyledText(comentario)}</span>
      </div>
    </article>
  );
};

export default Comentario;
