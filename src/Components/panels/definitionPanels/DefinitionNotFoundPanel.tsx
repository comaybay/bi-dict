import React, { useContext } from "react";
import { ThemeContext } from "../../../App";

const apologyIn: ApologyIn = {
  "vi": "Không tìm được nghĩa của từ :(",
  "en": "Definition not found :(",
}

const DefinitionNotFoundPanel: React.FC<DefinitionNotFoundPanelProps> = ({ language }) => {
  const { panel, text } = useContext(ThemeContext);
  return (
    <div className={`${panel.sectionContainer} rounded-sm p-2`}>
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