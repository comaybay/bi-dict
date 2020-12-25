import React from "react";
import { EtymologySection } from "../../../types/Definition";
import { EtymologyInnerSectionBase } from "./EtymologyInnerSectionBase";
import { PronunciationsSection } from "./PronunciationsSection";
import { CharacterLimitDropDownList } from "../../dropDownList/CharacterLimitDropDownList"


export const EtymologySectionBase: React.FC<EtymologySection> = ({ etymology, innerSections, pronunciations }) => {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-100 px-3 py-2 rounded-tl-3xl">
        {pronunciations.length !== 0 &&
          <PronunciationsSection pronunciations={pronunciations} />
        }
        {etymology !== null &&
          <CharacterLimitDropDownList
            list={[etymology]}
            itemCss="italic font-light"
          />
        }
        <div>
          {innerSections.map(innerSection => <EtymologyInnerSectionBase {...innerSection} />)}
        </div>
      </div>
    </div>);
};


