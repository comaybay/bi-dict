import React from "react";

const loadingTextIn: LoadingTextIn = {
  "vi": "Đang tải...",
  "en": "Loading...",
}

const LoadingPanel: React.FC<LoadingPanelProps> = ({ language }) => {
  return (
    <div className="bg-gray-300 rounded-md p-2">
      <div className="flex items-center justify-center h-full">
        <p className="bg-gray-100 py-6 px-20">
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