import React, { useState } from "react"
import DropdownButton from "../buttons/DropdownButton";

export interface CharacterLimitDropdownListProps {
  title?: React.ReactNode;
  list: string[];
  characterLimit?: number;
  itemClassName?: string;
}

export const CharacterLimitDropdownList: React.FC<CharacterLimitDropdownListProps> = ({ title, characterLimit = 20, list, itemClassName = "" }) => {
  if (list === null || list.length === 0) throw new TypeError("list cannot be empty or null");

  const [buttonDropped, setButtonDropped] = useState(false);
  const [minimize, setMinimize] = useState(true);
  const children = list.map(text => <p key={text} className={itemClassName}>{text}</p>);

  const needsMinimization = list[0] && list[0].length > characterLimit;
  if (needsMinimization && minimize)
    children[0] = <p className={itemClassName}>{`${list[0].slice(0, characterLimit).trim()}...`}</p>;

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
            <DropdownButton
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
