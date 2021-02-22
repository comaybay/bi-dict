import React from "react";
import Tag from "./Tag"

const LanguageTag: React.FC<LanguageTagProps> = ({ language, cssOverride }) => {
  return (
    <Tag text={language} extendedClassName={cssOverride} />
  );
};
export default LanguageTag;

export interface LanguageTagProps {
  language: string;
  cssOverride: string;
}