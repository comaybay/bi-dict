import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { DropDownList } from "../../../list/DropDownList";


export const DefinitionPanelDropDownList: React.FC<DefinitionPanelDropDownListProps> = ({ title, items }) => {
  const { text } = useContext(ThemeContext);
  return (
    <DropDownList
      title={<p className={`${text.medium} font-semibold`}>{title}</p >}
      children={items.map(i => <p className={text.medium}>{i}</p>)}
      trailingElement={<p className={`relative bottom-2 ${text.medium}`} >...</p>} />
  );
};

interface DefinitionPanelDropDownListProps {
  title?: string;
  items: string[];
}
