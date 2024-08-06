import { useRef } from "react";
export const storysHooks = () => {
  const storyContainerRef = useRef(null);
  const scrollLeft = () => {
    const container = storyContainerRef.current;
    container.scrollBy({ left: -200, behavior: "smooth" }); // Ajusta el valor para el desplazamiento
  };

  const scrollRight = () => {
    const container = storyContainerRef.current;
    container.scrollBy({ left: 200, behavior: "smooth" }); // Ajusta el valor para el desplazamiento
  };

  return {
    storyContainerRef,
    scrollLeft,
    scrollRight,
  };
};
