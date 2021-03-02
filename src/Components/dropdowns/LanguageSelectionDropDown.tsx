import { useContext } from "react";
import { ThemeContext } from "../../App";
import LanguageAbbreviation from "../../utils/LanguageAbbreviation"

export interface LanguageSelectionDropDownProps {
  code: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  cssOverride?: string;
}

const LanguageSelectionDropDown: React.FC<LanguageSelectionDropDownProps> = ({ code, handleChange, cssOverride = "" }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <select
        className={`px-1 border-1.5 ${theme.languageDropDown} ${cssOverride}`}
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