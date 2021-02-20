import React from "react";
import DefinitionPanel, { DefinitionPanelProps } from "./base/DefinitionPanel"
import DefinitionSourceTag from "./tags/DefinitionSourceTag";
import LanguageTag from "./tags/LanguageTag"

const DefinitionPanelEN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  return (
    <DefinitionPanel
      definition={definition}
      tags={[
        <LanguageTag language="English" cssOverride="bg-blue-300" />,
        <DefinitionSourceTag sourceName={definition.sourceName} sourceLink={definition.sourceLink} />
      ]} />
  )
}
export default DefinitionPanelEN;