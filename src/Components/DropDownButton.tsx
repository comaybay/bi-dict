import { useState } from "react"
import dropDownArrow from "../assets/images/drop-down-arrow.svg"

interface DropDownButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DropDownButton: React.FC<DropDownButtonProps> = ({ handleClick }) => {
  const [rotation, setRotation] = useState("-rotate-90");

  return (
    <button
      className="w-3 h-3"
      onClick={(e) => {
        handleClick(e);
        setRotation(rotation === "rotate-0" ? "-rotate-90" : "rotate-0")
      }}
    >
      <img className={`transform ${rotation}`} src={dropDownArrow} alt="dropdown button" />
    </button>
  );
}