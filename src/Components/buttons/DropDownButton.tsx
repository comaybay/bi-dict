import anime from "animejs";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../App";

interface DropdownButtonProps {
  dropped: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ handleClick, dropped }) => {
  const { dropdownButtonSVG } = useContext(ThemeContext)

  const buttonRef = useRef(null);
  useEffect(() => {
    anime({
      targets: buttonRef.current,
      rotate: dropped ? [0, 90] : [90, 0],
      easing: "easeOutQuad",
      duration: 200,
    });
  }, [dropped]);

  return (
    <button
      ref={buttonRef}
      className="w-1.5 md:w-2"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <svg className={dropdownButtonSVG} viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 24.5V2L39 24.5L2 47V24.5Z" stroke-width="3" stroke-linejoin="round" />
      </svg>
    </button>
  );
}
export default DropdownButton