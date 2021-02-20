import React from "react";

export interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AbstractButtonProps {
  cssOverride?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AbstractButton: React.FC<AbstractButtonProps> = ({ handleClick, cssOverride }) => {
  if (!cssOverride) cssOverride = "";

  return (
    <button
      className={`flex-initial inline-block uppercase text-center px-3 py-1 rounded-sm  ${cssOverride}`}
      onClick={handleClick}
    >
      Search
    </button>
  )
}
export default AbstractButton;