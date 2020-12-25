import DefinitionPanelBase, { DefinitionPanelProps, DefinitionPanelBaseProps } from "./DefninitionPanelBase/DefinitionPanelBase"

const DefinitionPanelEN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  const props: DefinitionPanelBaseProps = {
    definition: definition,
    config: {
      languageTag: {
        language: "English",
        color: "blue"
      },
    }
  }
  return (
    <DefinitionPanelBase {...props} />
  )
}
export default DefinitionPanelEN;