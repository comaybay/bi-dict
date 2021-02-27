import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { ButtonProps } from "../buttons/Button";
import { LanguageSelectionDropDownProps } from "../dropdowns/LanguageSelectionDropDown";
import { SearchBoxProps } from "../SearchBox";
import { SuggestionBoxProps } from "../SuggestionBox";

interface SearchFormProps {
  searchBox: React.FunctionComponentElement<SearchBoxProps>
  dropDown1: React.FunctionComponentElement<LanguageSelectionDropDownProps>;
  dropDown2: React.FunctionComponentElement<LanguageSelectionDropDownProps>;
  searchButton: React.FunctionComponentElement<ButtonProps>;
  suggestionBox: React.FunctionComponentElement<SuggestionBoxProps> | null;
};

const SearchForm: React.FC<SearchFormProps> = (
  { searchBox, dropDown1, dropDown2, searchButton, suggestionBox }) => {
  const [suggestionBoxEnabled, setSuggestionBoxEnabled] = useState(false);

  const { searchForm } = useContext(ThemeContext);
  return (
    <div className={`${searchForm} flex justify-center`}>
      <div className="flex min-w-0 w-full max-w-4xl pt-2 pb-2.5">
        <div className="flex-auto min-w-0"> {/*min-w-0 to give child elems width so they won't grow out of container*/}
          <div
            onFocus={() => setSuggestionBoxEnabled(true)}
            onBlur={() => setSuggestionBoxEnabled(false)}
          >
            {searchBox}
          </div>
          {suggestionBox && suggestionBoxEnabled &&
            <div id="suggestion-box-container" className="h-0" /*h-0 to keep everything the same when suggestionBox appear*/
              onMouseDown={(e) => e.preventDefault()} /*stop searchBox's blur event (so that suggestionBox onClick handler can be called)*/
              onClick={(e) => (document.activeElement as HTMLElement).blur()} /*after onClick handler is called, hide suggestion box*/
            >
              {suggestionBox}
            </div>
          }
        </div>
        {dropDown1}
        {dropDown2}
        <div className="flex pl-2">
          {searchButton}
        </div>
      </div>
    </div >
  )
}
export default SearchForm;


