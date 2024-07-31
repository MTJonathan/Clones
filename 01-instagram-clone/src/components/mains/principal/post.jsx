import React from "react";
import PostInfo from "./postInfo";
import PostBtn from "./postBtn";
const Post = ({ img, user, lugar, imgPrincipal, tiempo }) => {
  return (
    <article className="post">
      <PostInfo img={img} user={user} lugar={lugar} tiempo={tiempo} />
      <div className="imgPrincipal">
        <img src={imgPrincipal} alt={user} />
      </div>
      <PostBtn />
    </article>
  );
};

export default Post;
