import React from "react";

export interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AbstractButtonProps {
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AbstractButton: React.FC<AbstractButtonProps> = ({ handleClick, className }) => {
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
export default AbstractButton;