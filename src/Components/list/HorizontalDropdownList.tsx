import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../App";
import DropdownButton from "../buttons/DropdownButton";

export interface HorizontalDropdownListProps {
  title?: React.ReactNode;
  children: JSX.Element[];
  limit?: number;
  toggle: boolean;
}

export const HorizontalDropdownList: React.FC<HorizontalDropdownListProps> = ({ title, limit = 1, children, toggle }) => {
  if (children === null || children.length === 0) throw new TypeError("parameter 'children' cannot be an empty array or null");

  const [minimize, setMinimize] = useState(true);
  const toggleMinimization = () => setMinimize(minimize => !minimize);

  const size = children.length;
  const minimizable = size > limit;

  useEffect(() => {
    setMinimize(toggle);
  }, [toggle]);

  const showedChildren = children.slice(0, limit);
  const others = children.slice(limit);

  const { text } = useContext(ThemeContext);
  return (
    <>
      <div className="flex">
        {size > limit &&
          <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
            <DropdownButton
              toggle={!minimize}
              handleClick={toggleMinimization}
            />
          </div>
        }
        <div className="pl-1 flex">
          <div className={`${text.paragraph2} ext-lg italic`}>
            <div className="select-none cursor-pointer" onClick={toggleMinimization}>
              {title}
            </div>
            <div className="flex flex-row">
              {showedChildren}
              <div className={(minimizable && minimize ? "hidden" : "")}>
                {others}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
