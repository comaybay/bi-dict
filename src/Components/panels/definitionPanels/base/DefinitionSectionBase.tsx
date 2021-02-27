import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { DefinitionSection } from "../../../../types/Definition";
import BulletedDropDownList from "../../../list/BulletedDropDownList";
import NumberedDropDownList from "../../../list/NumberedDropDownList";
import { DefinitionPanelDropDownList } from "./DefinitionPanelDropDownList";


export const DefinitionSectionBase: React.FC<DefinitionSection> = ({ antonyms, definition, examples, subDefinitions, synonyms }) => {
  const { text } = useContext(ThemeContext);
  return (
    <>
      <p>{definition}</p>
      <div>
        {examples.length !== 0 &&
          <BulletedDropDownList>
            {examples.map(example => <li className={`${text.paragraph2} font-light italic`}>{example}</li>)}
          </BulletedDropDownList>
        }
      </div>
      { subDefinitions.length !== 0 &&
        <NumberedDropDownList
          showElementAmount={2}
          children={subDefinitions.map(sd =>
            <li className="list list-decimal">
              <DefinitionSectionBase {...sd} />
            </li>
          )}
        />
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
