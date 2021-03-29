import React, { useContext } from "react";
import { Etymology } from "../../../../types/Definition";
import { EtymologyInnerSectionBase } from "./EtymologyInnerSectionBase";
import { PronunciationsSection } from "./PronunciationsSection";
import { CharacterLimitDropdownList } from "../../../list/CharacterLimitDropdownList"
import { getEtymologyInnerSectionKey } from "./DefinitionPanel";
import SpeakerButton from "../../../buttons/SpeakerButton"
import { ThemeContext } from "../../../../App";


export const EtymologySectionBase: React.FC<Etymology> = ({ origin, innerSections, pronunciations, audio }) => {
  const { panel: { section, sectionDecoration }, text } = useContext(ThemeContext);
  return (
    <div className={sectionDecoration}>
      <div className={`px-3 py-2  ${section}`}>
        <div className="flex">
          {pronunciations.length !== 0 &&
            <PronunciationsSection pronunciations={pronunciations} />
          }
          {audio.length !== 0 &&
            <div className="pl-0.5 pt-1 flex items-center">
              <SpeakerButton link={audio} />
            </div>
          }
        </div>
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



