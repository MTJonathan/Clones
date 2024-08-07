import { useState } from "react";
const formatNumber = (number) => {
  return number.toLocaleString("de-DE");
};
export const postBtnHooks = ( countCorazon ) => {
  const [corazon, setCorazon] = useState(false);
  const [guardar, setGuardar] = useState(false);
  const [compartir, setCompartir] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState({});
  const initialCount = formatNumber(countCorazon);
  const [count, setCount] = useState(initialCount);
  const [meGusta, setMeGusta] = useState(false);
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
  const handleDoubleClick = () => {
    if(!corazon){
      setMeGusta(true);
      setTimeout(()=>{
        setMeGusta(false);
      }, 1000)
      handleClickCorazon();
    } else {
      setMeGusta(true);
      setTimeout(()=>{
        setMeGusta(false);
      }, 1000)
    }
  };
  const isAnyCheckboxSelected = Object.values(selectedUsers).some(
    (value) => value
  );
  return {
    handleClickGuardar,
    handleClickCorazon,
    handleClickCompartir,
    selectedUsers,
    handleCheckboxChange,
    isAnyCheckboxSelected,
    corazon,
    guardar,
    compartir,
    count,
    meGusta,
    handleDoubleClick,
  };
};
