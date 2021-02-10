import React from "react";
import { DropDownList } from "../../list/DropDownList";


export const DefinitionPanelDropDownList: React.FC<{ title?: string; items: string[]; }> = ({ title, items }) => {
  return (
    <DropDownList
      title={<p> {title}</p >}
      children={items.map(i => <p>{i}</p>)}
      trailingElement={< p className="relative bottom-2" >...</p >} />
  );
};
