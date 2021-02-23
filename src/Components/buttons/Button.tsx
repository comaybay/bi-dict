import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  const { button, border, text } = useContext(ThemeContext);
  return (
    <button
      className={`${button.background} ${text.medium} flex-initial inline-block uppercase text-center px-3 py-1 rounded-sm 
      ${button.active} border-1.5 ${border.light} ${border.focus} focus:outline-none`}
      onClick={handleClick}
    >
      Search
    </button>
  )
}
export default Button;