import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { Sense } from "../../../../types/Definition";
import BulletedDropdownList from "../../../list/BulletedDropdownList";
import NumberedDropdownList from "../../../list/NumberedDropdownList";
import { getDefinitionSectionKey } from "./DefinitionPanel";
import DefinitionPanelDropdownList from "./DefinitionPanelDropdownList";


export const DefinitionSectionBase: React.FC<Sense> = ({ antonyms, meaning, examples, subSenses, synonyms }) => {
  const { text, trailing } = useContext(ThemeContext);
  return (
    <>
      <p>{meaning}</p>
      <div>
        {examples.length !== 0 &&
          <BulletedDropdownList>
            {examples.map(example => <li key={example} className={`${text.paragraph2} font-light italic`}>{example}</li>)}
          </BulletedDropdownList>
        }
      </div>
      { subSenses.length !== 0 &&
        <NumberedDropdownList
          showElementAmount={2}
          children={subSenses.map(sd =>
            <li key={getDefinitionSectionKey(sd)} className="list list-decimal">
              <DefinitionSectionBase {...sd} />
            </li>
          )}
          trailingElement={<p className={`${text.paragraph} relative bottom-2 ${trailing.definitionSection}`}>...</p>}
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
