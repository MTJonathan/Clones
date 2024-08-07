import PostInfo from "./postInfo";
import PostBtn from "./postBtn";
import PostDescripcion from "./postDescripcion";
import { postBtnHooks } from "./Hooks/postBtn";
import PostImgPrincipal from "./postImgPrincipal";
const Post = ({ img, user, lugar, imgPrincipal, tiempo, txt, countCorazon = 0 }) => {
  const {
    handleClickGuardar,
    handleClickCorazon,
    handleClickCompartir, 
    selectedUsers,
    handleCheckboxChange,
    isAnyCheckboxSelected,
    corazon,
    guardar,
    compartir,
    count,
    meGusta,
    handleDoubleClick,
  } = postBtnHooks(countCorazon);
  return (
    <article className="post">
      <PostInfo img={img} user={user} lugar={lugar} tiempo={tiempo} />
      <PostImgPrincipal imgPrincipal={imgPrincipal} user={user} meGusta={meGusta} handleDoubleClick={handleDoubleClick}/>
      <PostBtn
        handleClickCompartir={handleClickCompartir}
        handleClickCorazon={handleClickCorazon}
        handleClickGuardar={handleClickGuardar}
        selectedUsers={selectedUsers}
        handleCheckboxChange={handleCheckboxChange}
        isAnyCheckboxSelected={isAnyCheckboxSelected}
        corazon={corazon}
        guardar={guardar}
        compartir={compartir}
      />
      <PostDescripcion user={user} txt={txt} count={count} />
    </article>
  );
};

export default Post;
