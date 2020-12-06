import WhiteButton from "./Buttons/WhiteButton"
import LanguageSelectionDropDown from "./LanguageSelectionDropDown";
import { SearchBox } from "./SearchBoxProps";

interface SearchFormProps {
  searchBoxInputText: string;
  searchBoxHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sourceLangValue: string;
  sourceLangHandleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  destLangValue: string;
  destLangHandleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  buttonHandleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SearchForm: React.FC<SearchFormProps> = (
  { searchBoxInputText, searchBoxHandleChange, sourceLangValue, sourceLangHandleChange, destLangValue, destLangHandleChange, buttonHandleClick }
) => {
  return (
    <div className="flex justify-center bg-gray-100 border-b-1 border-gray-300">
      <div className="flex w-full max-w-4xl pt-2 pb-2.5">
        <SearchBox inputText={searchBoxInputText} handleChange={searchBoxHandleChange} />
        <LanguageSelectionDropDown value={sourceLangValue} handleChange={sourceLangHandleChange} />
        <LanguageSelectionDropDown value={destLangValue} handleChange={destLangHandleChange} />
        <div className="flex pl-2">
          <WhiteButton handleClick={buttonHandleClick} />
        </div>
      </div>
    </div >
  )
}
export default SearchForm;


