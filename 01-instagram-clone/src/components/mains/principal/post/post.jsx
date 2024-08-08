import PostInfo from "./postInfo";
import PostBtn from "./postBtn";
import PostDescripcion from "./postDescripcion";
import { postBtnHooks } from "./Hooks/postBtn";
import PostImgPrincipal from "./postImgPrincipal";
import VentanaMeGustas from "../ventanasEmergentes/meGustas/ventanaMeGustas";
const Post = ({ img, user, lugar, imgPrincipal, tiempo, txt, countCorazon = 0 }) => {
  const {
    handleClickGuardar,
    handleClickCorazon,
    handleClickCompartir,
    handleClickOpciones, 
    handleClickComentar,
    handleClickMeGusta,
    selectedUsers,
    handleCheckboxChange,
    isAnyCheckboxSelected,
    corazon,
    guardar,
    compartir,
    count,
    meGusta,
    handleDoubleClick,
    active,
    setActive,
    comentar,
    meGustas
  } = postBtnHooks(countCorazon);

  return (
    <>
      <article className="post">
      <PostInfo img={img} user={user} lugar={lugar} tiempo={tiempo} handleClick={handleClickOpciones} active={active} setActive={setActive}/>
      <PostImgPrincipal imgPrincipal={imgPrincipal} user={user} meGusta={meGusta} handleDoubleClick={handleDoubleClick}/>
        <footer>
          <PostBtn
            handleClickCompartir={handleClickCompartir}
            handleClickCorazon={handleClickCorazon}
            handleClickGuardar={handleClickGuardar}
            handleClickComentar={handleClickComentar}
            handleClickOpciones={handleClickOpciones}
            handleDoubleClick={handleDoubleClick}
            selectedUsers={selectedUsers}
            handleCheckboxChange={handleCheckboxChange}
            isAnyCheckboxSelected={isAnyCheckboxSelected}
            countCorazon={count}
            tiempo={tiempo}
            corazon={corazon}
            guardar={guardar}
            compartir={compartir}
            imgPrincipal={imgPrincipal}
            comentar={comentar}
            img={img}
            user={user}
            txt={txt}
            meGusta={meGusta}
          />
          <PostDescripcion user={user} txt={txt} count={count} handleClickComentar={handleClickComentar} handleClickMeGustas={handleClickMeGusta}/>
        </footer>
      </article>
      <VentanaMeGustas meGustas={meGustas} handleClickMeGustas={handleClickMeGusta}/>
    </>
  );
};

export default Post;
