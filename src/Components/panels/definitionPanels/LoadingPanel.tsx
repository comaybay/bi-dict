import React, { useContext } from "react";
import { ThemeContext } from "../../../App";

const loadingTextIn: LoadingTextIn = {
  "vi": "Đang tải...",
  "en": "Loading...",
}

const LoadingPanel: React.FC<LoadingPanelProps> = ({ language }) => {
  const { panel, text } = useContext(ThemeContext);
  return (
    <div className={`${panel.extraLight} rounded-md p-2`}>
      <div className="flex items-center justify-center h-full">
        <p className={text.dark}>
          {loadingTextIn[language]}
        </p>
      </div>
    </div>
  )
}
export default LoadingPanel;

interface LoadingTextIn {
  [language: string]: string;
}

export interface LoadingPanelProps {
  language: string;
}