import React, { useState } from "react"
import { DropDownButton } from "../DropDownButton";

export interface CharacterLimitDropDownListProps {
  title?: React.ReactNode;
  list: string[];
  characterLimit?: number;
  itemCss?: string;
}

export const CharacterLimitDropDownList: React.FC<CharacterLimitDropDownListProps> = ({ title, characterLimit = 20, list, itemCss = "" }) => {
  if (list === null || list.length === 0) throw new TypeError("list cannot be empty or null");

  const [minimize, setMinimize] = useState(true);
  const children = list.map(text => <p className={itemCss}>{text}</p>);
  if (minimize && list[0])
    children[0] = <p className={itemCss}>{`${list[0].slice(0, characterLimit).trim()}...`}</p>;

  return (
    <>
      {title}
      <div className="flex">
        <div> {/*div wrapper to prevent button from being stretch when un-minimized*/}
          <DropDownButton handleClick={() => setMinimize(!minimize)} />
        </div>
        <div className="pl-1 flex items-start">
          <div className="text-gray-500 ext-lg italic">
            {minimize && children[0]}
            {!minimize && children}
          </div>
        </div>
      </div>
    </>
  )
}
