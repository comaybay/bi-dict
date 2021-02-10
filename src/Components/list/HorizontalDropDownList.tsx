import React, { useState } from "react"
import { DropDownButton } from "../dropdowns/DropDownButton";

export interface HorizontalDropDownListProps {
  title?: React.ReactNode;
  children: JSX.Element[];
  limit?: number;
}

export const HorizontalDropDownList: React.FC<HorizontalDropDownListProps> = ({ title, limit = 1, children }) => {
  if (children === null || children.length === 0) throw new TypeError("parameter 'children' cannot be an empty array or null");

  const [minimize, setMinimize] = useState(true);
  const size = children.length;
  const needsMinimization = size > limit;
  const toggleMinimization = () => setMinimize(!minimize);

  return (
    <>
      <div className="flex">
        {size > limit &&
          <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
            <DropDownButton handleClick={toggleMinimization} />
          </div>
        }
        <div className="pl-1 flex">
          <div className="text-gray-500 ext-lg italic">
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
