import React, { useContext } from "react";
import { AppContext } from "../../../../App";
import { HorizontalDropdownList } from "../../../list/HorizontalDropdownList"

export const PronunciationsSection: React.FC<{ pronunciations: string[]; }> = ({ pronunciations }) => {
  if (!pronunciations || !pronunciations.length) throw new TypeError("pronunciations cannot be empty or null");

  const { globalMinimize } = useContext(AppContext);

  return (
    <HorizontalDropdownList toggle={globalMinimize}>
      {pronunciations.map((p) => <p key={p} className="px-1">{p}</p>)}
    </HorizontalDropdownList>
  )
};



