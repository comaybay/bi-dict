import { useContext } from "react";
import { ThemeContext } from "../../App";

export interface DropdownSelectionProps {
  currentOption: string;
  options: string[]
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  extendedClassName?: string;
}

const DropdownSelection: React.FC<DropdownSelectionProps> = ({ currentOption, handleChange, options, extendedClassName = "" }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <select
        className={`md:px-1 text-xs md:text-base ${theme.dropdownSelection} ${extendedClassName}`}
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
export default DropdownSelection;