import { ButtonProps } from "./buttons/ButtonBase";
import { LanguageSelectionDropDownProps } from "./LanguageSelectionDropDown";
import { SearchBoxProps } from "./SearchBox";
import { SuggestionBoxProps } from "./SuggestionBox";

interface SearchFormProps {
  searchBox: React.FunctionComponentElement<SearchBoxProps>
  languageSelectionDropDown1: React.FunctionComponentElement<LanguageSelectionDropDownProps>;
  languageSelectionDropDown2: React.FunctionComponentElement<LanguageSelectionDropDownProps>;
  searchButton: React.FunctionComponentElement<ButtonProps>;
  suggestionBox: React.FunctionComponentElement<SuggestionBoxProps> | null;
};

const SearchForm: React.FC<SearchFormProps> = (
  { searchBox, languageSelectionDropDown1, languageSelectionDropDown2, searchButton, suggestionBox }
) => {
  return (
    <div className="flex justify-center bg-gray-100 border-b-1 border-gray-300">
      <div className="flex min-w-0 w-full max-w-4xl pt-2 pb-2.5">
        <div className="flex-auto min-w-0"> {/*min-w-0 to give child elems width so they won't grow out of container*/}
          <div>
            {searchBox}
          </div>
          {suggestionBox &&
            <div className="h-0"> {/*h-0 to keep everything the same when suggestionBox appear*/}
              {suggestionBox}
            </div>
          }
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


