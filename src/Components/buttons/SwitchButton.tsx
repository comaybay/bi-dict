import { useContext } from "react";
import { ThemeContext } from "../../App";

interface SwitchButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
//TODO: Better switch animation.
const SwitchButton: React.FC<SwitchButtonProps> = ({ handleClick }) => {
  const { switchButton } = useContext(ThemeContext);
  return (
    <button
      className={`w-3 md:w-9 p-1 h-full ${switchButton.button}`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <svg className={`fill-current ${switchButton.svg}`} viewBox="0 0 298 183" xmlns="http://www.w3.org/2000/svg">
        <path d="M298 67H67L102 43H217V0L298 67Z" />
        <path d="M7.62939e-06 116L231 116L196 140H81V183L7.62939e-06 116Z" />
      </svg>
    </button>
  );
}
export default SwitchButton;