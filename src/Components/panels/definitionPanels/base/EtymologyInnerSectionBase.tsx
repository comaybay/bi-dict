import React, { useContext } from "react";
import { AppContext, ThemeContext } from "../../../../App";
import { EtymologyInnerSection } from "../../../../types/Definition";
import NumberedDropdownList from "../../../list/NumberedDropdownList";
import { getDefinitionSectionKey } from "./DefinitionPanel";
import DefinitionPanelDropdownList from "./DefinitionPanelDropdownList";
import { DefinitionSectionBase } from "./DefinitionSectionBase";


export const EtymologyInnerSectionBase: React.FC<EtymologyInnerSection> =
  ({ antonyms, senses, inflection, partOfSpeech, synonyms }) => {
    const { text, trailing } = useContext(ThemeContext);
    const { globalMinimize } = useContext(AppContext);
    return (
      <div className="pl-2">
        <p className={`font-bold ${text.header}`}>{partOfSpeech}</p>
        { inflection.length !== 0 &&
          <p className={`font-bold ${text.paragraph}`}>{`(${inflection})`}</p>
        }
        {senses.length !== 0 &&
          <NumberedDropdownList
            showElementAmount={4}
            children={
              senses.map(ds =>
                <li key={getDefinitionSectionKey(ds)}
                  className={`${text.paragraph} list-decimal`}
                >
                  <DefinitionSectionBase {...ds} />
                </li>
              )}
            toggle={globalMinimize}
            trailingElement={<p className={`${text.paragraph} relative bottom-2 ${trailing.definitionSection}`}>...</p>}
          />
        }
        <div className="pl-2">
          {synonyms.length !== 0 &&
            <DefinitionPanelDropdownList title="synonyms:" items={synonyms} />

          }
          {antonyms.length !== 0 &&
            <DefinitionPanelDropdownList title="antonyms:" items={antonyms} />
          }
        </div>
      </div>
    );
  };

