import DefinitionPanel, { DefinitionPanelProps } from "./base/DefinitionPanel"
import LanguageTag from "./tags/LanguageTag"
import DefinitionSourceTag from "./tags/DefinitionSourceTag"
import { useContext } from "react"
import { ThemeContext } from "../../../App"

//TODO: rename cssOverride to extendedClassName
const DefinitionPanelVN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  const { tag } = useContext(ThemeContext);
  return (
    <DefinitionPanel
      definition={definition}
      tags={[
        <LanguageTag key="LanguageTag" language="Tiếng Việt" cssOverride={tag.vietnamese} />,
        <DefinitionSourceTag key="SourceTag" sourceName={definition.sourceName} sourceLink={definition.sourceLink} />
      ]} />
  )
}
export default DefinitionPanelVN;