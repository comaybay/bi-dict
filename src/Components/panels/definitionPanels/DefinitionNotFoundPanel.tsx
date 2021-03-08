import React, { useContext } from "react";
import { ThemeContext } from "../../../App";

const apologyIn: ApologyIn = {
  "vi": "Không tìm được nghĩa của từ :(",
  "en": "Definition not found :(",
}

const DefinitionNotFoundPanel: React.FC<DefinitionNotFoundPanelProps> = ({ language }) => {
  const { panel, text } = useContext(ThemeContext);
  return (
    <div className={`opacity-80 rounded-sm p-2 ${panel.sectionContainer}`}>
      <div className="flex items-center justify-center h-full">
        <p className={text.header}>
          {apologyIn[language]}
        </p>
      </div>
    </div>
  )
}
export default DefinitionNotFoundPanel;

interface ApologyIn {
  [language: string]: string;
}

export interface DefinitionNotFoundPanelProps {
  language: string;
}