interface SearchBoxProps {
  inputText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ inputText, handleChange }) => {
  return (
    <input
      type="text"
      className="pl-3 text-lg flex-grow h-11 rounded-sm border-1.5 border-gray-300 bg-gray-50 
          focus:outline-none focus:border-indigo-200"
      placeholder="Tìm từ gì đây..." onChange={handleChange} value={inputText} />
  );
};
