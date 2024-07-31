import React from 'react'

const PostDescripcion = ({ user }) => {
  return (
    <div className="postDescripcion">
      <span className='megutasDescripcion'>0 Me gusta</span>
      <div className="descripcionPost">
        <span className='userDescripcion'>{user} </span>
        <span className='txtPost'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, distinctio. Amet eos cumque quia tempore molestias sapiente libero omnis fugit fugiat incidunt perferendis odio, voluptates saepe dolore quisquam vitae eligendi?</span>
      </div>
      <span className='verComentariosDescripcion'>Ver los comentarios</span>
      <form onSubmit={e => e.preventDefault()}>
        <input className='comentarInput' type="text" placeholder='Añade un comentario...' />
      </form>
    </div>
  )
}

export default PostDescripcion
