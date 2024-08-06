import PostInfo from "./postInfo";
import PostBtn from "./postBtn";
import PostDescripcion from "./postDescripcion";
const Post = ({ img, user, lugar, imgPrincipal, tiempo, txt }) => {
  return (
    <article className="post">
      <PostInfo img={img} user={user} lugar={lugar} tiempo={tiempo} />
      <div className="imgPrincipal">
        <img src={imgPrincipal} alt={user} />
      </div>
      <PostBtn />
      <PostDescripcion user={user} txt={txt}/>
    </article>
  );
};

export default Post;
