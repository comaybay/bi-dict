import { useContext } from "react";
import { ThemeContext } from "../../App";

export interface DropDownSelectionProps {
  currentOption: string;
  options: string[]
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  extendedClassName?: string;
}

const DropDownSelection: React.FC<DropDownSelectionProps> = ({ currentOption, handleChange, options, extendedClassName = "" }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <select
        className={`md:px-1 text-xs md:text-base ${theme.dropDownSelection} ${extendedClassName}`}
        value={currentOption}
        onChange={handleChange}
      >
        {options.map(option =>
          <option key={option} value={option}>{option}</option>
        )}
      </select>
    </>
  );
}
export default DropDownSelection;