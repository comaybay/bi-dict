import React from "react";

interface Props {
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ handleClick, className }) => {
  if (!className) className = "";

  return (
    <button
      className={`flex-initial inline-block uppercase text-center px-3 py-1 rounded-sm focus:outline-none ${className}`}
      onClick={handleClick}
    >
      Search
    </button>
  )
}
export default Button;