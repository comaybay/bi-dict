import DefinitionPanelBase, { DefinitionPanelProps, DefinitionPanelBaseProps } from "./DefinitionPanelBase"

const DefinitionPanelVN: React.FC<DefinitionPanelProps> = ({ definition }) => {
  const props: DefinitionPanelBaseProps = {
    definition: definition,
    config: {
      languageTag: {
        language: "Tiếng Việt",
        color: "red",
      },
      etymology: "Từ nguyên",
      pronunciation: "Phát âm",
    }
  }
  return (
    <DefinitionPanelBase {...props} />
  )
}
export default DefinitionPanelVN;