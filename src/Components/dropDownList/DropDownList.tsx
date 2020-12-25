import React, { useState } from "react"
import { DropDownButton } from "../DropDownButton";

export interface DropDownListProps {
  title?: React.ReactNode;
  children: React.ReactNode[];
  showElementAmount?: number;
}

export const DropDownList: React.FC<DropDownListProps> = ({ title, showElementAmount: showAmount = 1, children }) => {
  if (children === null || children.length === 0) throw new TypeError("children cannot be an empty array or null");

  const [minimize, setMinimize] = useState(true);
  const size = children.length;

  return (
    <>
      {title}
      <div className="flex">
        {size > showAmount &&
          <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
            <DropDownButton handleClick={() => setMinimize(!minimize)} />
          </div>
        }
        <div className="pl-1 flex items-start">
          <div className="text-gray-500 ext-lg italic">
            {minimize && children.slice(0, showAmount)}
            {!minimize && children}
          </div>
        </div>
      </div>
    </>
  )
}
