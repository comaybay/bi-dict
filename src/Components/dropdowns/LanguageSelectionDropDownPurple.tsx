import LanguageSelectionDropDown, { LanguageSelectionDropDownProps } from "../../components/dropdowns/LanguageSelectionDropDown"

const LanguageSelectionDropDownPurple: React.FC<LanguageSelectionDropDownProps> = (props) => {
  return (
    <LanguageSelectionDropDown {...props} cssOverride="border-purple-400" />
  );
}
export default LanguageSelectionDropDownPurple;