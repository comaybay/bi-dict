import React from "react";
import { EtymologyInnerSection } from "../../../types/Definition";
import { DropDownList } from "../../dropDownList/DropDownList";
import { DefinitionSectionBase } from "./DefinitionSectionBase";


export const EtymologyInnerSectionBase: React.FC<EtymologyInnerSection> = ({ antonyms, definitionSections, inflection, partOfSpeech, synonyms }) => {
  return (
    <div className="pl-2">
      <p className="font-bold">{partOfSpeech}</p>
      <p className="pl-2">{inflection}</p>
      <ol className="pl-2">
        <DropDownList
          showElementAmount={4}
          trailingElement={<p className="relative bottom-2">...</p>}>
          {definitionSections.map(ds => <li className="ml-4 list-decimal"> <DefinitionSectionBase {...ds} /> </li>)}
        </DropDownList>
      </ol>
      <div className="pl-2">
        {synonyms.length !== 0 &&
          <DropDownList
            title={<p>synonyms:</p>}
            children={synonyms.map(s => <p>{s}</p>)}
            trailingElement={<p className="relative bottom-2">...</p>}
          />
        }
        {antonyms.length !== 0 &&
          <DropDownList title={<p>antonyms:</p>}>
            {antonyms.map(a => <p>{a}</p>)}
          </DropDownList>
        }

      </div>
    </div>
  );
};
