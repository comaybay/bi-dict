import React from "react";

const LanguageTag: React.FC<TagProps> = ({ text, cssOverride }) => {
  return (
    <div className={`float-right mr-2 mt-2 px-2 py-1 rounded-sm text-white ${cssOverride}`}>
      <p>{text}</p>
    </div>
  );
};
export default LanguageTag;

interface TagProps {
  text: string;
  cssOverride: string;
}