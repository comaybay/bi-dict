import DefinitionPanel, { DefinitionPanelProps } from "./base/DefinitionPanel"
import LanguageTag from "./tags/LanguageTag"
import DefinitionSourceTag from "./tags/DefinitionSourceTag"

const DefinitionPanelVN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  return (
    <DefinitionPanel
      definition={definition}
      tags={[
        <LanguageTag language="Tiếng Việt" cssOverride="bg-red-300" />,
        <DefinitionSourceTag sourceName={definition.sourceName} sourceLink={definition.sourceLink} />
      ]} />
  )
}
export default DefinitionPanelVN;