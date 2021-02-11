import React from "react";
import { DefinitionSection } from "../../../../types/Definition";
import { DropDownList } from "../../../list/DropDownList";
import { DefinitionPanelDropDownList } from "./DefinitionPanelDropDownList";


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
      { subDefinitions.length !== 0 &&
        <ol className="pl-4">
          <DropDownList
            showElementAmount={2}
            children={subDefinitions.map(sd =>
              <li className="list list-decimal">
                <DefinitionSectionBase {...sd} />
              </li>
            )}
          />
        </ol>
      }
      <div>
        {synonyms.length !== 0 &&
          <DefinitionPanelDropDownList title="synonyms:" items={synonyms} />
        }
      </div>
      <div>
        {antonyms.length !== 0 &&
          <DefinitionPanelDropDownList title="antonyms:" items={antonyms} />
        }
      </div>
    </>
  );
};
