import React from "react";
import { EtymologySection } from "../../../../types/Definition";
import { EtymologyInnerSectionBase } from "./EtymologyInnerSectionBase";
import { PronunciationsSection } from "./PronunciationsSection";
import { CharacterLimitDropDownList } from "../../../list/CharacterLimitDropDownList"


export const EtymologySectionBase: React.FC<EtymologySection> = ({ etymologyTexts, innerSections, pronunciations }) => {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-100 px-3 py-2 rounded-tl-3xl">
        {pronunciations.length !== 0 &&
          <PronunciationsSection pronunciations={pronunciations} />
        }
        {etymologyTexts.length !== 0 &&
          <CharacterLimitDropDownList
            characterLimit={96}
            itemCss="italic font-light"
            list={etymologyTexts}
          />
        }
        <div>
          {innerSections.map(innerSection =>
            <EtymologyInnerSectionBase {...innerSection} />
          )}
        </div>
      </div>
    </div>
  );
};


