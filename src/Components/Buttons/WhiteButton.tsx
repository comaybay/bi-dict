import React from "react";
import AbstractButton, { ButtonProps } from "./ButtonBase"


const WhiteButton: React.FC<ButtonProps> = ({ handleClick }) =>
(
  <AbstractButton
    cssOverride="bg-gray-50 text-gray-400 border-1.5 border-gray-300 hover:text-gray-500 active:bg-gray-100"
    handleClick={handleClick}
  />
);

export default WhiteButton;