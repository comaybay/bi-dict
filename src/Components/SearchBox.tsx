export interface SearchBoxProps {
  inputText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ inputText, handleChange }) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="pl-3 text-lg h-11 rounded-sm border-1.5 border-gray-300 bg-gray-50 
          focus:outline-none focus:border-indigo-200"
        placeholder="Tìm từ gì đây..." onChange={handleChange} value={inputText}
      />
    </div>
  );
};
export default SearchBox;