import { Corazon2Svg } from "../../../navegacion/iconos";
const PostImgPrincipal = ({ imgPrincipal, user, meGusta, handleDoubleClick }) => {
  return (
    <section className="imgPrincipal" onDoubleClick={handleDoubleClick}>
      <img src={imgPrincipal} alt={user} />
      <span className={meGusta ? "MeGustaActive" : undefined}>
        <Corazon2Svg />
      </span>
    </section>
  );
};

export default PostImgPrincipal;
