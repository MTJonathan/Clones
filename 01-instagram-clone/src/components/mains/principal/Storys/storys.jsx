import { storysHooks } from "./Hooks/storys";
import StorysPerfil from "./storysPerfil";
import "../../../../assets/css/mains/principal/storys.css";
import { storysPrincipal } from "../JS/storysPrincipal";
const Storys = () => {
  const { storyContainerRef, scrollLeft, scrollRight } = storysHooks();
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
