import React from "react";
import { HorizontalDropdownList } from "../../../list/HorizontalDropdownList"

export const PronunciationsSection: React.FC<{ pronunciations: string[]; }> = ({ pronunciations }) => {
  if (!pronunciations || !pronunciations.length) throw new TypeError("pronunciations cannot be empty or null");

  return (
    <HorizontalDropdownList>
      {pronunciations.map((p) => <p key={p} className="px-1">{p}</p>)}
    </HorizontalDropdownList>
  )
};



