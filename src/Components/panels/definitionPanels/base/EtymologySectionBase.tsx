import React, { useContext } from "react";
import { Etymology } from "../../../../types/Definition";
import { EtymologyInnerSectionBase } from "./EtymologyInnerSectionBase";
import { PronunciationsSection } from "./PronunciationsSection";
import { CharacterLimitDropdownList } from "../../../list/CharacterLimitDropdownList"
import { getEtymologyInnerSectionKey } from "./DefinitionPanel";
import { ThemeContext } from "../../../../App";


export const EtymologySectionBase: React.FC<Etymology> = ({ origin, innerSections, pronunciations }) => {
  const { panel: { section, sectionDecoration }, text } = useContext(ThemeContext);
  return (
    <div className={sectionDecoration}>
      <div className={`px-3 py-2 ${section}`}>
        {pronunciations.length !== 0 &&
          <PronunciationsSection pronunciations={pronunciations} />
        }
        {origin.length !== 0 &&
          <CharacterLimitDropdownList
            characterLimit={96}
            itemClassName={`${text.paragraph} italic font-light`}
            list={origin}
          />
        }
        <div>
          {innerSections.map(innerSection =>
            <EtymologyInnerSectionBase key={getEtymologyInnerSectionKey(innerSection)}
              {...innerSection}
            />
          )}
        </div>
      </div>
    </div>
  );
};



