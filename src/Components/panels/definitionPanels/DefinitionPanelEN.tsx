import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
import DefinitionPanel, { DefinitionPanelProps } from "./base/DefinitionPanel"
import DefinitionSourceTag from "./tags/DefinitionSourceTag";
import LanguageTag from "./tags/LanguageTag"

const DefinitionPanelEN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  const { tag } = useContext(ThemeContext);
  return (
    <DefinitionPanel
      definition={definition}
      tags={[
        <LanguageTag language="English" cssOverride={tag.english} />,
        <DefinitionSourceTag sourceName={definition.sourceName} sourceLink={definition.sourceLink} />
      ]} />
  )
}
export default DefinitionPanelEN;