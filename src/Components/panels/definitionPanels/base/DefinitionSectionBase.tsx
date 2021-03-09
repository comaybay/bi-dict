import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { DefinitionSection } from "../../../../types/Definition";
import BulletedDropdownList from "../../../list/BulletedDropdownList";
import NumberedDropdownList from "../../../list/NumberedDropdownList";
import { getDefinitionSectionKey } from "./DefinitionPanel";
import DefinitionPanelDropdownList from "./DefinitionPanelDropdownList";


export const DefinitionSectionBase: React.FC<DefinitionSection> = ({ antonyms, definition, examples, subDefinitions, synonyms }) => {
  const { text } = useContext(ThemeContext);
  return (
    <>
      <p>{definition}</p>
      <div>
        {examples.length !== 0 &&
          <BulletedDropdownList>
            {examples.map(example => <li key={example} className={`${text.paragraph2} font-light italic`}>{example}</li>)}
          </BulletedDropdownList>
        }
      </div>
      { subDefinitions.length !== 0 &&
        <NumberedDropdownList
          showElementAmount={2}
          children={subDefinitions.map(sd =>
            <li key={getDefinitionSectionKey(sd)} className="list list-decimal">
              <DefinitionSectionBase {...sd} />
            </li>
          )}
        />
      }
      <div>
        {synonyms.length !== 0 &&
          <DefinitionPanelDropdownList title="synonyms:" items={synonyms} />
        }
      </div>
      <div>
        {antonyms.length !== 0 &&
          <DefinitionPanelDropdownList title="antonyms:" items={antonyms} />
        }
      </div>
    </>
  );
};
