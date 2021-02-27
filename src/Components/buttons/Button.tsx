import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  const { button } = useContext(ThemeContext);
  return (
    <button
      className={`flex-initial inline-block uppercase text-center px-3 py-1 rounded-sm 
      border-1.5 focus:outline-none ${button}`}
      onClick={handleClick}
    >
      Search
    </button>
  )
}
export default Button;

export interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}