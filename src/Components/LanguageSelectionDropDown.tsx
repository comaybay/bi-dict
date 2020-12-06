export interface LanguageSelectionDropDownProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelectionDropDown: React.FC<LanguageSelectionDropDownProps> = ({ value, handleChange }) => {
  const language = ["VN", "EN", "JP"];
  const selectElems = getLanguageSelectionElements(language);
  return (
    <>
      <select
        className="px-1 border-1.5 text-gray-500 border-gray-300 bg-gray-50
          focus:bg-gray-100"
        value={value}
        onChange={handleChange}
      >{selectElems}</select>
    </>
  );
};
export default LanguageSelectionDropDown;

function getLanguageSelectionElements(languages: string[]) {
  const res = [];
  for (const language of languages) {
    res.push(
      <option value={language}>{language}</option>
    );
  }
  return res;
}
