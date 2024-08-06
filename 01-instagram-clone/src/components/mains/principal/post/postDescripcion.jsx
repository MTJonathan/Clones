
const PostDescripcion = ({ user, txt="", count }) => {
  
  const getStyledText = (text) => {
    const hashIndex = text.indexOf("#");
    const atIndex = text.indexOf("@");

    if (hashIndex === -1 && atIndex === -1) {
      return text;
    }

    const splitIndex = Math.min(
      hashIndex === -1 ? Infinity : hashIndex,
      atIndex === -1 ? Infinity : atIndex
    );

    const prefix = text.slice(0, splitIndex);
    const suffix = text.slice(splitIndex);
    const tag = suffix[0] === "#" ? "hashtag" : "atTag";
    const styledSuffix = (
      <span className={tag}>
        {suffix[0]}
        {suffix.slice(1)}
      </span>
    );

    return (
      <>
        {prefix}
        {styledSuffix}
      </>
    );
  };

  return (
    <div className="postDescripcion">
      <span className='megutasDescripcion'>{count} Me gusta</span>
      <div className="descripcionPost">
        <span className='userDescripcion'>{user} </span>
        <span className="txtPost">
          {getStyledText(txt)}
        </span>
      </div>
      <span className='verComentariosDescripcion'>Ver los comentarios</span>
      <form onSubmit={e => e.preventDefault()}>
        <input className='comentarInput' type="text" placeholder='Añade un comentario...' />
      </form>
    </div>
  )
}

export default PostDescripcion
