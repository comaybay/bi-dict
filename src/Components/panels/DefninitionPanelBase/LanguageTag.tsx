import React from "react";

type TagColor = "red" | "green" | "blue";

function getTagColorCss(color: TagColor) {
  switch (color) {
    case "red": return "bg-red-300";
    case "green": return "bg-green-300";
    case "blue": return "bg-blue-300";
  }
}
export interface LanguageTagProps {
  language: string;
  color: TagColor;
}
export const LanguageTag: React.FC<LanguageTagProps> = ({ language, color }) => {
  const tagColor = getTagColorCss(color);
  return (
    <div className={`float-right mr-2 mt-2 px-2 py-1 rounded-sm text-white ${tagColor}`}>
      <p>{language}</p>
    </div>
  );
};
