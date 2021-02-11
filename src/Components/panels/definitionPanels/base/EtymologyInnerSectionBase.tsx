import React from "react";
import { EtymologyInnerSection } from "../../../../types/Definition";
import { DropDownList } from "../../../list/DropDownList";
import { DefinitionPanelDropDownList } from "./DefinitionPanelDropDownList";
import { DefinitionSectionBase } from "./DefinitionSectionBase";


export const EtymologyInnerSectionBase: React.FC<EtymologyInnerSection> =
  ({ antonyms, definitionSections, inflection, partOfSpeech, synonyms }) => {
    return (
      <div className="pl-2">
        <p className="font-bold">{partOfSpeech}</p>
        <p className="pl-2">{inflection}</p>
        <ol className="pl-2">
          {definitionSections.length !== 0 &&
            <DropDownList
              showElementAmount={4}
              children={
                definitionSections.map(ds =>
                  <li className="ml-4 list-decimal">
                    <DefinitionSectionBase {...ds} />
                  </li>
                )}
              trailingElement={<p className="relative bottom-2">...</p>}
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

