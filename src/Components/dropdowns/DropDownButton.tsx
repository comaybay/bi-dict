import { useState } from "react"
import dropDownArrow from "../../assets/images/drop-down-arrow.svg"

interface DropDownButtonProps {
  dropped: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DropDownButton: React.FC<DropDownButtonProps> = ({ handleClick, dropped }) => {
  const rotation = dropped === false ? "-rotate-90" : "rotate-0";
  return (
    <button
      className="w-3 h-3"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img className={`transform ${rotation}`} src={dropDownArrow} alt="dropdown button" />
    </button>
  );
}