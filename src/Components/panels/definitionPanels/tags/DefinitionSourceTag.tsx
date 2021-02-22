
import React from "react";
import Tag from "./Tag"

const DefinitionSourceTag: React.FC<DefinitionSourceTagProps> = ({ sourceLink, sourceName }) => {
  return (
    <a href={sourceLink} >
      <Tag extendedClassName={"bg-green-300"} text={sourceName} />
    </a>
  )
};
export default DefinitionSourceTag;

interface DefinitionSourceTagProps {
  sourceName: string,
  sourceLink: string,
}
