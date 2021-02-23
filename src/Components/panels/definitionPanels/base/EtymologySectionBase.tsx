import React, { useContext } from "react";
import { EtymologySection } from "../../../../types/Definition";
import { EtymologyInnerSectionBase } from "./EtymologyInnerSectionBase";
import { PronunciationsSection } from "./PronunciationsSection";
import { CharacterLimitDropDownList } from "../../../list/CharacterLimitDropDownList"
import { getEtymologyInnerSectionKey } from "./DefinitionPanel";
import { ThemeContext } from "../../../../App";


export const EtymologySectionBase: React.FC<EtymologySection> = ({ etymologyTexts, innerSections, pronunciations }) => {
  const { panel: { light, sectionDecoration }, text } = useContext(ThemeContext);
  return (
    <div className={sectionDecoration}>
      <div className={`${light} px-3 py-2 rounded-tl-3xl`}>
        {pronunciations.length !== 0 &&
          <PronunciationsSection pronunciations={pronunciations} />
        }
        {etymologyTexts.length !== 0 &&
          <CharacterLimitDropDownList
            characterLimit={96}
            itemCss={`${text.medium} italic font-light`}
            list={etymologyTexts}
          />
        }
        <div>
          {innerSections.map(innerSection =>
            <EtymologyInnerSectionBase key={getEtymologyInnerSectionKey(innerSection)} {...innerSection} />
          )}
        </div>
      </div>
    </div>
  );
};



