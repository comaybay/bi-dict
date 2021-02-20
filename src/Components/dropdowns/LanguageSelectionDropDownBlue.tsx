import LanguageSelectionDropDown, { LanguageSelectionDropDownProps } from "./LanguageSelectionDropDown"

const LanguageSelectionDropDownBlue: React.FC<LanguageSelectionDropDownProps> = (props) => {
  return (
    <LanguageSelectionDropDown {...props} cssOverride="border-blue-200 text-blue-500" />
  );
}
export default LanguageSelectionDropDownBlue;