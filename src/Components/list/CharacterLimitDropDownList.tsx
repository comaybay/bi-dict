import React, { useState } from "react"
import { DropDownButton } from "../dropdowns/DropDownButton";

export interface CharacterLimitDropDownListProps {
  title?: React.ReactNode;
  list: string[];
  characterLimit?: number;
  itemCss?: string;
}

export const CharacterLimitDropDownList: React.FC<CharacterLimitDropDownListProps> = ({ title, characterLimit = 20, list, itemCss = "" }) => {
  if (list === null || list.length === 0) throw new TypeError("list cannot be empty or null");

  const [buttonDropped, setButtonDropped] = useState(false);
  const [minimize, setMinimize] = useState(true);
  const children = list.map(text => <p className={itemCss}>{text}</p>);

  const needsMinimization = list[0] && list[0].length > characterLimit;
  if (needsMinimization && minimize)
    children[0] = <p className={itemCss}>{`${list[0].slice(0, characterLimit).trim()}...`}</p>;

  const toggleMinimization = () => {
    setMinimize(!minimize);
    setButtonDropped(!buttonDropped);
  };
  return (
    <>
      {title}
      <div className="flex">
        {needsMinimization &&
          <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
            <DropDownButton
              dropped={buttonDropped}
              handleClick={toggleMinimization}
            />
          </div>
        }
        <div className="pl-1 flex flex-col items-start">
          {needsMinimization && minimize && children[0]}
          {(!needsMinimization || !minimize) && children}
        </div>
      </div>
    </>
  )
}
