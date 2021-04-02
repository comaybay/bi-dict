import anime from "animejs";
import { MouseEventHandler, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../App"

const MinimizeButton: React.FC<MinimizeButtonProps> = ({ onClick, toggle }) => {
  const theme = useContext(ThemeContext);
  const buttonRef = useRef(null);

  useEffect(() => {
    anime({
      targets: buttonRef.current,
      rotate: toggle ? [90, 0] : [0, 90],
      easing: "easeOutQuad",
      duration: 300,
    });
  }, [toggle])

  return (
    //content-center only works if flex-wrap exists.
    <button ref={buttonRef}
      className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-wrap justify-center content-center ${theme.minimizeButton}`}
      onClick={onClick}
    >
      <svg className={`w-6 h-6 md:w-9 md:h-9 md:pl-1 ${theme.dropdownButtonSVG}`} viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 24.5V2L39 24.5L2 47V24.5Z" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </button>
  );
};
export default MinimizeButton;

interface MinimizeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  toggle: boolean;
}