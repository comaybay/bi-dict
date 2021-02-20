import React from "react";

const apologyIn: ApologyIn = {
  "vi": "Không tìm được nghĩa của từ :(",
  "en": "Definition not found :(",
}

const DefinitionNotFoundPanel: React.FC<DefinitionNotFoundPanelProps> = ({ language }) => {
  return (
    <div className="bg-gray-300 rounded-md p-2">
      <div className="flex items-center justify-center h-full">
        <p className="bg-gray-100 py-6 px-20">
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