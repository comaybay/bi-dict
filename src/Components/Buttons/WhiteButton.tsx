import React from "react";
import Button from "./Button"

export interface WhiteButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ handleClick }) =>
(
  <Button
    className="bg-gray-50 text-gray-400 border-1.5 border-gray-300 hover:text-gray-500 active:bg-gray-100"
    handleClick={handleClick}
  />
);

export default WhiteButton;