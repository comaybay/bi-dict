import DefinitionPanel, { DefinitionPanelProps } from "./base/DefinitionPanel"
import LanguageTagVN from "./languageTags/LanguageTagVN"

const DefinitionPanelVN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  return (
    <DefinitionPanel
      definition={definition}
      languageTag={<LanguageTagVN />} />
  )
}
export default DefinitionPanelVN;