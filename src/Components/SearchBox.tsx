import { useContext } from "react";
import { ThemeContext } from "../App";

export interface SearchBoxProps {
  inputText: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ inputText, handleChange, handleFocus, handleBlur }) => {
  const {searchBox } = useContext(ThemeContext);
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className={`pl-3 text-lg h-11 rounded-sm border-1.5 focus:outline-none ${searchBox}`}
        placeholder="Tìm từ gì đây..."
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputText}
      />
    </div>
  );
};
export default SearchBox;