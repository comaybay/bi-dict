import React from "react";
import { DropDownList } from "../../dropDownList/DropDownList"

export const PronunciationsSection: React.FC<{ pronunciations: string[]; }> = ({ pronunciations }) => {
  if (!pronunciations || !pronunciations.length) throw new TypeError("pronunciations cannot be empty or null");

  const pronunciationElements = pronunciations.map(pronunciation => <p>{pronunciation}</p>);
  return (
    <DropDownList
      children={pronunciationElements}
      trailingElement={<p className="relative bottom-2">...</p>}
    />
  )
};



