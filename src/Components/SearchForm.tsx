import { ButtonProps } from "./buttons/ButtonBase";
import { LanguageSelectionDropDownProps } from "./LanguageSelectionDropDown";
import { SearchBoxProps } from "./SearchBoxProps";

interface SearchFormProps {
  searchBox: React.FunctionComponentElement<SearchBoxProps>
  languageSelectionDropDown1: React.FunctionComponentElement<LanguageSelectionDropDownProps>;
  languageSelectionDropDown2: React.FunctionComponentElement<LanguageSelectionDropDownProps>;
  searchButton: React.FunctionComponentElement<ButtonProps>;
};

const SearchForm: React.FC<SearchFormProps> = (
  { searchBox, languageSelectionDropDown1, languageSelectionDropDown2, searchButton }
) => {
  return (
    <div className="flex justify-center bg-gray-100 border-b-1 border-gray-300">
      <div className="flex w-full max-w-4xl pt-2 pb-2.5">
        <div className="w-full">
          {searchBox}
        </div>
        {languageSelectionDropDown1}
        {languageSelectionDropDown2}
        <div className="flex pl-2">
          {searchButton}
        </div>
      </div>
    </div >
  )
}
export default SearchForm;


