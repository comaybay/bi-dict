import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { EtymologyInnerSection } from "../../../../types/Definition";
import { DropDownList } from "../../../list/DropDownList";
import { getDefinitionSectionKey } from "./DefinitionPanel";
import { DefinitionPanelDropDownList } from "./DefinitionPanelDropDownList";
import { DefinitionSectionBase } from "./DefinitionSectionBase";


export const EtymologyInnerSectionBase: React.FC<EtymologyInnerSection> =
  ({ antonyms, definitionSections, inflection, partOfSpeech, synonyms }) => {
    const { text } = useContext(ThemeContext);
    return (
      <div className="pl-2">
        <p className={`${text.dark} font-bold`}>{partOfSpeech}</p>
        <p className={`${text.medium} pl-2`}>{inflection}</p>
        <ol className="pl-2">
          {definitionSections.length !== 0 &&
            <DropDownList
              showElementAmount={4}
              children={
                definitionSections.map(ds =>
                  <li key={getDefinitionSectionKey(ds)} className={`${text.medium} ml-4 list-decimal`}>
                    <DefinitionSectionBase {...ds} />
                  </li>
                )}
              trailingElement={<p className={`${text.medium} relative bottom-2`}>...</p>}
            />
          }
        </ol>
        <div className="pl-2">
          {synonyms.length !== 0 &&
            <DefinitionPanelDropDownList title="synonyms:" items={synonyms} />

          }
          {antonyms.length !== 0 &&
            <DefinitionPanelDropDownList title="antonyms:" items={antonyms} />
          }
        </div>
      </div>
    );
  };

