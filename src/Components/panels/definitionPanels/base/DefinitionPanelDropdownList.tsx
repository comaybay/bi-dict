import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import DropdownList from "../../../list/DropdownList";


const DefinitionPanelDropdownList: React.FC<DefinitionPanelDropdownListProps> = ({ title, items }) => {
  const { text } = useContext(ThemeContext);
  return (
    <DropdownList
      title={<p className={`${text.paragraph} font-semibold`}>{title}</p >}
      children={items.map(i => <p key={i} className={text.paragraph}>{i}</p>)}
      trailingElement={<p className={`relative bottom-2 ${text.paragraph}`} >...</p>}
      ChildrenContainer={Container}
    />
  );
};
export default DefinitionPanelDropdownList;

const Container: React.FC = ({ children }) => <div className="ml-1">{children}</div>;

interface DefinitionPanelDropdownListProps {
  title?: string;
  items: string[];
}
