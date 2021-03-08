import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { EtymologyInnerSection } from "../../../../types/Definition";
import NumberedDropdownList from "../../../list/NumberedDropdownList";
import { getDefinitionSectionKey } from "./DefinitionPanel";
import DefinitionPanelDropdownList from "./DefinitionPanelDropdownList";
import { DefinitionSectionBase } from "./DefinitionSectionBase";


export const EtymologyInnerSectionBase: React.FC<EtymologyInnerSection> =
  ({ antonyms, definitionSections, inflection, partOfSpeech, synonyms }) => {
    const { text } = useContext(ThemeContext);
    return (
      <div className="pl-2">
        <p className={`${text.header} font-bold`}>{partOfSpeech}</p>
        <p className={`${text.paragraph} pl-2`}>{inflection}</p>
        {definitionSections.length !== 0 &&
          <NumberedDropdownList
            showElementAmount={4}
            children={
              definitionSections.map(ds =>
                <li key={getDefinitionSectionKey(ds)} className={`${text.paragraph} list-decimal`}>
                  <DefinitionSectionBase {...ds} />
                </li>
              )}
            trailingElement={<p className={`${text.paragraph} relative bottom-2`}>...</p>}
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

