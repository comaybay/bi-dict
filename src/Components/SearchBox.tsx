import { useContext } from "react";
import { ThemeContext } from "../App";

export interface SearchBoxProps {
  inputText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ inputText, handleChange }) => {
  const theme = useContext(ThemeContext);
  const { text, border } = theme;
  const { searchBox } = theme.searchForm;
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className={`${text.inputPlaceholder} pl-3 text-lg h-11 rounded-sm ${searchBox.background} border-1.5 ${border.light}  
          focus:outline-none ${border.active}`}
        placeholder="Tìm từ gì đây..." onChange={handleChange} value={inputText}
      />
    </div>
  );
};
export default SearchBox;