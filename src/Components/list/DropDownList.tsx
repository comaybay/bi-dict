import React, { useState } from "react"
import { DropDownButton } from "../DropDownButton";

export interface DropDownListProps {
  title?: React.ReactNode;
  children: React.ReactNode[];
  trailingElement?: React.ReactNode;
  showElementAmount?: number;
}

export const DropDownList: React.FC<DropDownListProps> = ({ title, showElementAmount = 1, children, trailingElement }) => {
  if (children === null || children.length === 0) throw new TypeError("parameter 'children' cannot be an empty array or null");

  const [minimize, setMinimize] = useState(true);
  const size = children.length;
  const needsMinimization = children.length > showElementAmount;
  const toggleMinimization = () => setMinimize(!minimize);
  return (
    <>
      <div className="flex">
        {size > showElementAmount &&
          <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
            <DropDownButton handleClick={toggleMinimization} />
          </div>
        }
        <div className="pl-1 flex">
          <div className="text-gray-500 ext-lg">
            <div className="select-none cursor-pointer" onClick={toggleMinimization}>
              {title}
            </div>
            {needsMinimization && minimize &&
              <>
                {children.slice(0, showElementAmount)}
                <div className="cursor-pointer" onClick={toggleMinimization}>
                  {trailingElement}
                </div>
              </>
            }
            {(!needsMinimization || !minimize) && children}
          </div>
        </div>
      </div>
    </>
  )
}
