import { useContext } from "react";
import { ThemeContext } from "../App";

export interface SearchBoxProps {
  inputText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ inputText, handleChange }) => {
  const { border, searchBox } = useContext(ThemeContext);
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className={`pl-3 text-lg h-11 rounded-sm border-1.5 ${searchBox} ${border.color}  
          focus:outline-none ${border.focus}`}
        placeholder="Tìm từ gì đây..." onChange={handleChange} value={inputText}
      />
    </div>
  );
};
export default SearchBox;