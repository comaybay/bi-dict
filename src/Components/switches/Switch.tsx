import { useContext, useState } from "react";
import { ThemeContext } from "../../App";

const Switch: React.FC<SwitchProps> = ({ handleClick }) => {
  const { switch: switchTheme } = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState("left");

  let switchRight = "";
  if (switchState === "right")
    switchRight = "flex-row-reverse";

  return (
    <div
      className={`flex items-center w-8 h-4 md:w-12 md:h-7 px-1 rounded-full cursor-pointer ${switchRight} ${switchTheme.container}`}
      onClick={(e) => {
        handleClick();
        setSwitchState(switchState === "left" ? "right" : "left");
      }}
    >
      <input type="checkbox" className={`absolute appearance-none w-3 h-3 md:w-5 md:h-5 rounded-full cursor-pointer ${switchTheme.circle}`}></input>
    </div>
  )
}
export default Switch;

export interface SwitchProps {
  handleClick: () => void;
}