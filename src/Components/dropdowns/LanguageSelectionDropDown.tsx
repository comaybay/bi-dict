import LanguageAbbreviation from "../../utils/LanguageAbbreviation"

export interface LanguageSelectionDropDownProps {
  code: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  cssOverride?: string;
}

const LanguageSelectionDropDown: React.FC<LanguageSelectionDropDownProps> = ({ code, handleChange, cssOverride = "" }) => {
  return (
    <>
      <select
        className={`px-1 border-1.5 text-gray-500 border-gray-300 bg-gray-50
          focus:bg-gray-100 ${cssOverride}`}
        value={LanguageAbbreviation.fromISOLanguageCode(code)}
        onChange={handleChange}
      >
        {Array.from(LanguageAbbreviation.all()).map(language =>
          <option key={language} value={language}>{language}</option>
        )}
      </select>
    </>
  );
}
export default LanguageSelectionDropDown;