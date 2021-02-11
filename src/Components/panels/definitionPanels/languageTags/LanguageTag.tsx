import React from "react";

const LanguageTag: React.FC<LanguageTagProps> = ({ language, cssOverride }) => {
  return (
    <div className={`float-right mr-2 mt-2 px-2 py-1 rounded-sm text-white ${cssOverride}`}>
      <p>{language}</p>
    </div>
  );
};
export default LanguageTag;

export interface LanguageTagProps {
  language: string;
  cssOverride: string;
}