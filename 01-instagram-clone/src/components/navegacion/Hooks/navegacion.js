import { useState, useRef, useEffect } from "react";
export const navegacionHooks = () => {
  const [classCreate, setClassCreate] = useState(false);
  const crearOpcionesRef = useRef(null);
  const btnCrearRef = useRef(null);

  const handleClickCrear = (event) => {
    event.stopPropagation();
    setClassCreate(!classCreate);
  };
  const handleClickOutside = (event) => {
    if (
      crearOpcionesRef.current &&
      !crearOpcionesRef.current.contains(event.target) &&
      btnCrearRef.current &&
      !btnCrearRef.current.contains(event.target)
    ) {
      setClassCreate(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const txtClassCreate = classCreate ? "crearOpciones" : "noMostrarCrear";

  return {
    classCreate,
    crearOpcionesRef,
    btnCrearRef,
    txtClassCreate,
    handleClickCrear,
  };
};
