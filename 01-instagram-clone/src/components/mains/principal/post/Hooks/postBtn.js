import { useState } from "react";
const formatNumber = (number) => {
  return number.toLocaleString("de-DE");
};
export const postBtnHooks = (setCount, count) => {
  const [corazon, setCorazon] = useState(false);
  const [compartir, setCompartir] = useState(false);

  const classCompartir = compartir ? "compartirActive" : "compartirDesabled";
  const classCompartir2 = compartir ? "compartirDesabled" : "compartirActive";
  const classCorazon = corazon ? "corazonActive" : "corazonDesabled";
  const classCorazon2 = corazon ? "corazonDesabled" : "corazonActive";
  const handleClickGuardar = () => {
    setCompartir(!compartir);
  };
  const handleClickCorazon = () => {
    setCorazon((prevCorazon) => {
      const numericCount = parseInt(count.replace(/\./g, ""), 10);
      const newCount = !prevCorazon ? numericCount + 1 : numericCount - 1;
      setCount(formatNumber(newCount));
      return !prevCorazon;
    });
  };

  return {
    classCompartir,
    classCompartir2,
    classCorazon,
    classCorazon2,
    handleClickGuardar,
    handleClickCorazon,
  };
};
