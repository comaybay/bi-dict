import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../App";
import DropdownButton from "../buttons/DropdownButton";

export interface HorizontalDropdownListProps {
  title?: React.ReactNode;
  children: JSX.Element[];
  limit?: number;
  globalMinimize: boolean;
}

export const HorizontalDropdownList: React.FC<HorizontalDropdownListProps> = ({ title, limit = 1, children, globalMinimize }) => {
  if (children === null || children.length === 0) throw new TypeError("parameter 'children' cannot be an empty array or null");

  const [minimize, setMinimize] = useState(true);
  const toggleMinimization = () => setMinimize(minimize => !minimize);

  const size = children.length;
  const needsMinimization = size > limit;

  useEffect(() => {
    setMinimize(globalMinimize);
  }, [globalMinimize]);

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
              {needsMinimization && minimize &&
                children.slice(0, limit)
              }
              {(!needsMinimization || !minimize) &&
                children
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
