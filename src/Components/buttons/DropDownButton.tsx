import anime from "animejs";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../App";
import useEffectSkipFirstRender from "../../hooks/useEffectSkipFirstRender"

interface DropdownButtonProps {
  dropped: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ handleClick, dropped }) => {
  const { dropdownButtonSVG } = useContext(ThemeContext)

  const buttonRef = useRef(null);
  useEffectSkipFirstRender(() => {
    anime({
      targets: buttonRef.current,
      rotate: dropped ? [0, 90] : [90, 0],
      easing: "easeOutQuad",
      duration: 300,
    });
  }, [dropped])

  return (
    <button
      ref={buttonRef}
      className="w-1.5 md:w-2"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <svg className={dropdownButtonSVG} viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 24.5V2L39 24.5L2 47V24.5Z" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
export default DropdownButton