import React, { useEffect, useState } from "react"
import DropdownButton from "../buttons/DropdownButton";

const DropdownList: React.FC<DropdownListPropsBase> =
  ({ title, showElementAmount = 1, children, ChildrenContainer = Div, trailingElement, toggle }) => {
    if (children === null || children.length === 0) throw new TypeError("parameter 'children' cannot be an empty array or null");

    const [minimize, setMinimize] = useState(true);
    useEffect(() => {
      setMinimize(toggle);
    }, [toggle])

    const size = children.length;
    const toggleMinimization = () => {
      setMinimize(!minimize);
    };

    const minimizable = size > showElementAmount;
    const pressable = minimizable ? "cursor-pointer select-none" : "";

    const showedChildren = children.slice(0, showElementAmount);
    const others = children.slice(showElementAmount);

    return (
      <>
        <div className="flex">
          {minimizable &&
            <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
              <DropdownButton
                toggle={!minimize}
                handleClick={toggleMinimization}
              />
            </div>
          }
          <div>
            <div className={`ml-1 ${pressable}`} onClick={toggleMinimization}>
              {title}
            </div>
            <ChildrenContainer>
              {showedChildren}
              <div className={(minimizable && minimize) ? "hidden" : ""}>
                {others}
              </div>
              {minimizable && minimize &&
                <div className="cursor-pointer select-none" onClick={toggleMinimization}>
                  {trailingElement}
                </div>
              }
            </ChildrenContainer>
          </div>
        </div>
      </>
    )
  };
export default DropdownList;

const Div: React.FC = ({ children }) => <div>{children}</div>;

export interface DropdownListProps {
  title?: React.ReactNode;
  children: React.ReactNode[];
  trailingElement?: React.ReactNode;
  showElementAmount?: number;
  toggle: boolean;
}

export interface DropdownListPropsBase extends DropdownListProps {
  ChildrenContainer?: React.FC<any>;
}
