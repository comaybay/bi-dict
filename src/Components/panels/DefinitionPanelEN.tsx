import DefinitionPanelBase, { DefinitionPanelProps, DefinitionPanelBaseProps } from "./DefinitionPanelBase"

const DefinitionPanelEN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  const props: DefinitionPanelBaseProps = {
    definition: definition,
    config: {
      languageTag: {
        language: "English",
        color: "blue"
      },
      etymology: "Etymology",
      pronunciation: "Pronunciation",
    }
  }
  return (
    <DefinitionPanelBase {...props} />
  )
}
export default DefinitionPanelEN;