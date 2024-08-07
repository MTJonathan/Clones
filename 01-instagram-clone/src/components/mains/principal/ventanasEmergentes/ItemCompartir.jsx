import { useId } from "react";
export const ItemCompartir = ({ user, userName, img, isChecked, handleCheckboxChange }) => {
  const id = useId();
  return (
    <li>
      <label htmlFor={id}>
        <div className="imgCompartir"><img src={img} alt="" /></div>
        <div className="txtCompartir">
          <span className="userCompartir">{user}</span> <span className="userNameCompartir">{userName}</span>
        </div>
        <input type="checkbox" id={id} checked={isChecked} onChange={() => handleCheckboxChange(user)}/>
        <div className="check"></div>
      </label>
    </li>
  );
};
