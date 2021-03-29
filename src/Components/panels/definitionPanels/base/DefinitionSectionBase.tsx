import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import { Sense } from "../../../../types/Definition";
import BulletedDropdownList from "../../../list/BulletedDropdownList";
import NumberedDropdownList from "../../../list/NumberedDropdownList";
import { getDefinitionSectionKey } from "./DefinitionPanel";
import DefinitionPanelDropdownList from "./DefinitionPanelDropdownList";


export const DefinitionSectionBase: React.FC<Sense> =
  ({ antonyms, meaning, grammaticalNote, region, senseRegisters, examples, subSenses, synonyms }) => {
    const { text, trailing } = useContext(ThemeContext);
    return (
      <>
        <p>
          {grammaticalNote.length !== 0 &&
            <span className={text.paragraph3}>{`[${grammaticalNote}] `}</span>
          }
          {senseRegisters.length !== 0 &&
            <span className={text.paragraph3}>{`${senseRegisters} `}</span>
          }
          {region.length !== 0 &&
            <span className={text.paragraph3}>{`${region} `}</span>
          }
          <span className={text.paragraph}>{meaning}</span>
        </p>
        <div>
          {examples.length !== 0 &&
            <BulletedDropdownList>
              {examples.map(example => <li key={example} className={`${text.paragraph2}`}>{example}</li>)}
            </BulletedDropdownList>
          }
        </div>
        {
          subSenses.length !== 0 &&
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
