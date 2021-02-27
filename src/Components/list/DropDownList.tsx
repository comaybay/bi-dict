import React, { useState } from "react"
import { DropDownButton } from "../dropdowns/DropDownButton";

export const DropDownList: React.FC<DropDownListPropsBase> =
  ({ title, showElementAmount = 1, children, ChildrenContainer = Div, trailingElement }) => {
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
          <div>
            <div className="ml-1 select-none cursor-pointer" onClick={toggleMinimization}>
              {title}
            </div>
            <ChildrenContainer>
              {needsMinimization && minimize &&
                <>
                  {children.slice(0, showElementAmount)}
                  <div className="cursor-pointer" onClick={toggleMinimization}>
                    {trailingElement}
                  </div>
                </>
              }
              {(!needsMinimization || !minimize) && children}
            </ChildrenContainer>
          </div>
        </div>
      </>
    )
  };

const Div: React.FC = ({ children }) => <div>{children}</div>;


export interface DropDownListProps {
  title?: React.ReactNode;
  children: React.ReactNode[];
  trailingElement?: React.ReactNode;
  showElementAmount?: number;
}

export interface DropDownListPropsBase extends DropDownListProps {
  ChildrenContainer?: React.FC<any>;
}
