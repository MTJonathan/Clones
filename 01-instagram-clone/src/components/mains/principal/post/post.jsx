import PostInfo from "./postInfo";
import PostBtn from "./postBtn";
import PostDescripcion from "./postDescripcion";
import { useState } from "react";
const Post = ({ img, user, lugar, imgPrincipal, tiempo, txt, countCorazon=0 }) => {
  const formatNumber = (number) => {
    return number.toLocaleString('de-DE');
  };
  const initialCount = formatNumber(countCorazon);
  const [ count, setCount ] = useState(initialCount);
  return (
    <article className="post">
      <PostInfo img={img} user={user} lugar={lugar} tiempo={tiempo} />
      <div className="imgPrincipal">
        <img src={imgPrincipal} alt={user} />
      </div>
      <PostBtn count={count} setCount={setCount}/>
      <PostDescripcion user={user} txt={txt} count={count}/>
    </article>
  );
};

export default Post;
