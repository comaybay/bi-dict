import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";

const LanguageTag: React.FC<TagProps> = ({ text, extendedClassName }) => {
  const { tag } = useContext(ThemeContext);
  return (
    <div className={`px-2 py-1 rounded-sm text-xs md:text-base ${tag.base} ${extendedClassName}`}>
      <p>{text}</p>
    </div>
  );
};
export default LanguageTag;

interface TagProps {
  text: string;
  extendedClassName: string;
}