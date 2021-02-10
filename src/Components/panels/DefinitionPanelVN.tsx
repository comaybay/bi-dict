import DefinitionPanelBase, { DefinitionPanelProps, DefinitionPanelBaseProps } from "./DefninitionPanelBase/DefinitionPanelBase"

const DefinitionPanelVN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  const props: DefinitionPanelBaseProps = {
    definition: definition,
    config: {
      languageTag: {
        language: "Tiếng Việt",
        color: "red",
      },
    }
  }
  return (
    <DefinitionPanelBase {...props} />
  )
}
export default DefinitionPanelVN;