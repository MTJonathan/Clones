import { useState } from "react";
export const postInfoHook = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (active) {
      document.body.classList.remove("modal-abierto");
    } else {
      document.body.classList.add("modal-abierto");
    }
    setActive(!active);
  };
  const className = active ? "opcionesPost" : "opcionesPostDesabled";

  return { handleClick, className, setActive };
};
