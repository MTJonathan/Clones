import { useState } from "react";
const usuarioMeGustaHook = () => {
  const [isFollower, setIsFollower] = useState(false);
  const [ventana, setVentana] = useState(false);
  const handleClick = () => {
    setIsFollower(true);
    if (isFollower) {
      setVentana(true);
    }
  };
  const dejarDeSeguir = () => {
    setIsFollower(false);
    setVentana(false);
  };
  const handleClickVentanaCerrar = () => {
    setVentana(false);
  };

  return {
    isFollower,
    ventana,
    handleClick,
    dejarDeSeguir,
    handleClickVentanaCerrar,
  };
};

export default usuarioMeGustaHook;
