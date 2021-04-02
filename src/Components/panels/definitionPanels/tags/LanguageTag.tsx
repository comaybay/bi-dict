import React from "react";
import Tag from "./Tag"

const LanguageTag: React.FC<LanguageTagProps> = ({ language, extendedClassName }) => {
  return (
    <Tag text={language} extendedClassName={extendedClassName} />
  );
};
export default LanguageTag;

export interface LanguageTagProps {
  language: string;
  extendedClassName: string;
}