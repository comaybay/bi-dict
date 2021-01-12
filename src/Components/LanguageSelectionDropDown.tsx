import LanguageAbbreviation from "../utils/LanguageAbbreviation"

export interface LanguageSelectionDropDownProps {
  code: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelectionDropDown: React.FC<LanguageSelectionDropDownProps> = ({ code, handleChange }) => {
  return (
    <>
      <select
        className="px-1 border-1.5 text-gray-500 border-gray-300 bg-gray-50
          focus:bg-gray-100"
        value={LanguageAbbreviation.fromISOLanguageCode(code)}
        onChange={handleChange}
      >
        {Array.from(LanguageAbbreviation.all()).map(language =>
          <option value={language}>{language}</option>
        )}
      </select>
    </>
  );
}
export default LanguageSelectionDropDown;