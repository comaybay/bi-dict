import { useContext } from "react";
import { ThemeContext } from "../../App";
import switchIcon from "../../assets/images/switch-icon.svg";

interface SwitchButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ handleClick }) => {
  const { switchButton } = useContext(ThemeContext);
  return (
    <button
      className={`w-3 md:w-9 p-1 h-full ${switchButton}`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img src={switchIcon} alt="switch button" />
    </button>
  );
}
export default SwitchButton;