import DefinitionPanel, { DefinitionPanelProps } from "./base/DefinitionPanel"
import LanguageTagEN from "./languageTags/LanguageTagEN"

const DefinitionPanelEN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  return (
    <DefinitionPanel
      definition={definition}
      languageTag={<LanguageTagEN />} />
  )
}
export default DefinitionPanelEN;