import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const Button: React.FC<ButtonProps> = ({ handleClick, extendedClassName }) => {
  const { button } = useContext(ThemeContext);
  return (
    <button
      className={`text-xs md:text-base flex-initial inline-block uppercase text-center px-3 py-1 rounded-sm 
      border-1.5 h-full font-medium ${button} ${extendedClassName}`}
      onClick={handleClick}
    >
      Search
    </button>
  )
}
export default Button;

export interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  extendedClassName?: string;
}