import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { DropDownList } from "../../../list/DropDownList";


export const DefinitionPanelDropDownList: React.FC<DefinitionPanelDropDownListProps> = ({ title, items }) => {
  const { text } = useContext(ThemeContext);
  return (
    <DropDownList
      title={<p className={`${text.paragraph} font-semibold`}>{title}</p >}
      children={items.map(i => <p className={text.paragraph}>{i}</p>)}
      trailingElement={<p className={`relative bottom-2 ${text.paragraph}`} >...</p>} />
  );
};

interface DefinitionPanelDropDownListProps {
  title?: string;
  items: string[];
}
