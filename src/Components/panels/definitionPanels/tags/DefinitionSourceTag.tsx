
import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import Tag from "./Tag"

const DefinitionSourceTag: React.FC<DefinitionSourceTagProps> = ({ sourceLink, sourceName }) => {
  const { tag } = useContext(ThemeContext);
  return (
    <a href={sourceLink} >
      <Tag extendedClassName={`${tag.definitionSource}`} text={sourceName} />
    </a>
  )
};
export default DefinitionSourceTag;

interface DefinitionSourceTagProps {
  sourceName: string,
  sourceLink: string,
}
