import { useState } from "react";
const formatNumber = (number) => {
  return number.toLocaleString("de-DE");
};
export const postBtnHooks = (setCount, count) => {
  const [corazon, setCorazon] = useState(false);
  const [guardar, setGuardar] = useState(false);
  const [compartir, setCompartir] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState({});

  const classGuardar = guardar ? "guardarActive" : "guardarDesabled";
  const classGuardar2 = guardar ? "guardarDesabled" : "guardarActive";
  const classCorazon = corazon ? "corazonActive" : "corazonDesabled";
  const classCorazon2 = corazon ? "corazonDesabled" : "corazonActive";
  const classCompartir = compartir ? "compartirActive" : "compartirDesabled";
  const handleClickGuardar = () => {
    setGuardar(!guardar);
  };
  const handleClickCorazon = () => {
    setCorazon((prevCorazon) => {
      const numericCount = parseInt(count.replace(/\./g, ""), 10);
      const newCount = !prevCorazon ? numericCount + 1 : numericCount - 1;
      setCount(formatNumber(newCount));
      return !prevCorazon;
    });
  };

  const handleClickCompartir = () => {
    setCompartir(!compartir);
    compartir ? document.body.classList.remove("modal-abierto") : document.body.classList.add("modal-abierto");
  };
  const handleCheckboxChange = (user) => {
    setSelectedUsers((prevSelected) => ({
      ...prevSelected,
      [user]: !prevSelected[user],
    }));
  };

  const isAnyCheckboxSelected = Object.values(selectedUsers).some(
    (value) => value
  );
  return {
    classGuardar,
    classGuardar2,
    classCorazon,
    classCorazon2,
    handleClickGuardar,
    handleClickCorazon,
    classCompartir,
    handleClickCompartir,
    selectedUsers,
    handleCheckboxChange,
    isAnyCheckboxSelected,
  };
};
