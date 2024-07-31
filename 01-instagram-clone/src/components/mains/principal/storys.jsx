import React, { useState, useRef } from "react";
import StorysPerfil from "./storysPerfil";
import "../../../assets/css/mains/principal/storys.css";
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
        <StorysPerfil img={`https://unavatar.io/midudev`} user={`midudev`} />
        <StorysPerfil
          img={`https://unavatar.io/todo_code`}
          user={`todo_code`}
        />
        <StorysPerfil
          img={`https://unavatar.io/sergiecode`}
          user={`sergiecode`}
        />
        <StorysPerfil
          img={`https://unavatar.io/itshannaowo`}
          user={`itshannaowo`}
        />
        <StorysPerfil
          img={`https://unavatar.io/LionelMessi0K`}
          user={`leomessi`}
        />
        <StorysPerfil
          img={`https://unavatar.io/3am_musica`}
          user={`3am.musica`}
        />
        <StorysPerfil
          img={`https://unavatar.io/ClubALoficial`}
          user={`alianzalima`}
        />
        <StorysPerfil
          img={`https://unavatar.io/Nicki_Nicole19`}
          user={`naiki`}
        />
        <StorysPerfil
          img={`https://unavatar.io/acampossalazar`}
          user={`acampossalazar`}
        />
        <StorysPerfil
          img={`https://unavatar.io/fluminenseFC`}
          user={`fluminenseFC`}
        />
        <StorysPerfil
          img={`https://unavatar.io/FCBarcelona_es`}
          user={`FCBarcelona`}
        />
        <StorysPerfil
          img={`https://unavatar.io/realmadriden`}
          user={`realmadrid`}
        />
        <StorysPerfil
          img={`https://unavatar.io/fmsworldseries`}
          user={`fmsworldseries`}
        />
        <StorysPerfil
          img={`https://unavatar.io/InfoFreestyle`}
          user={`InfoFreestyle`}
        />
      </article>
      <button className="scrollButton right" onClick={scrollRight}>
        {`>`}
      </button>
    </section>
  );
};

export default Storys;
