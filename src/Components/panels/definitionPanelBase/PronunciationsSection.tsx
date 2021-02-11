import React from "react";
import { HorizontalDropDownList } from "../../list/HorizontalDropDownList"

export const PronunciationsSection: React.FC<{ pronunciations: string[]; }> = ({ pronunciations }) => {
  if (!pronunciations || !pronunciations.length) throw new TypeError("pronunciations cannot be empty or null");

  return (
    <HorizontalDropDownList>
      {pronunciations.map(
        (p, index) => index % 2 ?
          <p className="px-1 bg-gray-200">{p}</p> :
          <p className="px-1 bg-gray-50">{p}</p>
      )}
    </HorizontalDropDownList>
  )
};



