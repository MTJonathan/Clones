const PostDescripcion = ({ user, txt="", count, handleClickComentar, handleClickMeGustas }) => {
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
    <div className="postDescripcion">
      <span className='megutasDescripcion' onClick={handleClickMeGustas}>{count} Me gusta</span>
      <div className="descripcionPost">
        <span className='userDescripcion'>{user} </span>
        <span className="txtPost">
          {getStyledText(txt)}
        </span>
      </div>
      <span className='verComentariosDescripcion' onClick={handleClickComentar}>Ver los comentarios</span>
      <form onSubmit={e => e.preventDefault()}>
        <input className='comentarInput' type="text" placeholder='Añade un comentario...' />
      </form>
    </div>
  )
}

export default PostDescripcion
