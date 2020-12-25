import React, { useState } from "react"
import { DropDownButton } from "../DropDownButton";

export interface DropDownListProps {
  title?: React.ReactNode;
  children: React.ReactNode[];
  trailingElement?: JSX.Element;
  showElementAmount?: number;
}

export const DropDownList: React.FC<DropDownListProps> = ({ title, showElementAmount = 1, children, trailingElement }) => {
  if (children === null || children.length === 0) throw new TypeError("children cannot be an empty array or null");

  const [minimize, setMinimize] = useState(true);
  const size = children.length;
  const needsMinimization = children.length > showElementAmount;

  return (
    <>
      {title}
      <div className="flex">
        {size > showElementAmount &&
          <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
            <DropDownButton handleClick={() => setMinimize(!minimize)} />
          </div>
        }
        <div className="pl-1 flex items-start">
          <div className="text-gray-500 ext-lg italic">
            {needsMinimization && minimize &&
              <>
                {children.slice(0, showElementAmount)}
                {trailingElement}
              </>
            }
            {(!minimize || !needsMinimization) && children}
          </div>
        </div>
      </div>
    </>
  )
}
