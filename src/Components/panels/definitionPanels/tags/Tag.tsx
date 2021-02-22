import React from "react";

const LanguageTag: React.FC<TagProps> = ({ text, extendedClassName }) => {
  return (
    <div className={`px-2 py-1 rounded-sm text-white ${extendedClassName}`}>
      <p>{text}</p>
    </div>
  );
};
export default LanguageTag;

interface TagProps {
  text: string;
  extendedClassName: string;
}