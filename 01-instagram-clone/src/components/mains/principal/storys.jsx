import React, { useRef } from "react";
import StorysPerfil from "./storysPerfil";
import "../../../assets/css/mains/principal/storys.css";
import { storysPrincipal } from "../../../assets/JS/storysPrincipal";
const Storys = () => {
  const storyContainerRef = useRef(null);
  const scrollLeft = () => {
    const container = storyContainerRef.current;
    container.scrollBy({ left: -200, behavior: "smooth" }); // Ajusta el valor para el desplazamiento
  };

  const scrollRight = () => {
    const container = storyContainerRef.current;
    container.scrollBy({ left: 200, behavior: "smooth" }); // Ajusta el valor para el desplazamiento
  };
  return (
    <section className="storys">
      <button className="scrollButton left" onClick={scrollLeft}>
        {`<`}
      </button>

      <article ref={storyContainerRef} className="storysContainer">
        {storysPrincipal.map((story) => (
          <StorysPerfil img={story.img} user={story.user} />
        ))}
      </article>
      <button className="scrollButton right" onClick={scrollRight}>
        {`>`}
      </button>
    </section>
  );
};

export default Storys;
