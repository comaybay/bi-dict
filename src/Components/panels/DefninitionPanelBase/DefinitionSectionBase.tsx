import React from "react";
import { DefinitionSection } from "../../../types/Definition";
import { DropDownList } from "../../dropDownList/DropDownList";


export const DefinitionSectionBase: React.FC<DefinitionSection> = ({ antonyms, definition, examples, subDefinitions, synonyms }) => {
  return (
    <>
      <p>{definition}</p>
      <div>
        {examples.length !== 0 &&
          <ul>
            <DropDownList>
              {examples.map(example => <li className="ml-4 font-light italic list-disc">{example}</li>)}
            </DropDownList>
          </ul>
        }
      </div>
      <div>
        {synonyms.length !== 0 &&
          <DropDownList title={<p>synonyms:</p>}>
            {synonyms.map(synonym => <p>{synonym}</p>)}
          </DropDownList>
        }
      </div>
      <div>
        {antonyms.length !== 0 &&
          <DropDownList title={<p>antonyms:</p>}>
            {antonyms.map(antonym => <p>{antonym}</p>)}
          </DropDownList>
        }
      </div>
      <div>
        {subDefinitions.map(sd => <p className="pl-2">
          <DefinitionSectionBase {...sd} />
        </p>)}
      </div>
    </>
  );
};
