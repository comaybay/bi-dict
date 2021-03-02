import React from "react";
import { HorizontalDropDownList } from "../../../list/HorizontalDropDownList"

export const PronunciationsSection: React.FC<{ pronunciations: string[]; }> = ({ pronunciations }) => {
  if (!pronunciations || !pronunciations.length) throw new TypeError("pronunciations cannot be empty or null");

  return (
    <HorizontalDropDownList>
      {pronunciations.map((p) => <p key={p} className="px-1">{p}</p>)}
    </HorizontalDropDownList>
  )
};



