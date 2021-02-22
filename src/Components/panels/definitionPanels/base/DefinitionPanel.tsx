import React from "react";
import Definition, { DefinitionSection, EtymologyInnerSection, EtymologySection } from "../../../../types/Definition"
import Panel from "../../Panel";
import { EtymologySectionBase } from "./EtymologySectionBase";
import { PronunciationsSection } from "./PronunciationsSection";

const DefinitionPanel: React.FC<DefinitionPanelBaseProps> = ({ definition, tags }) => {
  const isEtymologySectionEmpty = (etymology: EtymologySection): boolean =>
    (etymology.etymologyTexts.length === 0 && etymology.innerSections.length === 0 && etymology.pronunciations.length === 0);

  return (
    <Panel extendedClassName="relative">
      <div className="absolute right-0 flex flex-row space-x-2 mt-2 mr-2">
        {tags}
      </div>

      <div className="text-gray-600 px-5 py-4 relative">
        <div className="text-gray-700 text-2xl font-bold">
          {definition.word}
        </div>
        {definition.globalPronunciations.length !== 0 &&
          <PronunciationsSection pronunciations={definition.globalPronunciations} />
        }
        <div className="pt-2">
          {definition.etymologies.map(etymologySection => {
            if (isEtymologySectionEmpty(etymologySection))
              return null;
            else
              return (
                <div key={getEtymologySectionKey(etymologySection)} className="py-2">
                  <EtymologySectionBase {...etymologySection} />
                </div>
              )
          })}
        </div>
      </div>
    </Panel>
  )
}

function getEtymologySectionKey(etymologySection: EtymologySection) {
  let key1 = etymologySection.etymologyTexts?.[0];
  let key2 = etymologySection.innerSections.length ?? getEtymologyInnerSectionKey(etymologySection.innerSections[0]);
  let key3 = etymologySection.pronunciations?.[0];
  return key1 + key2 + key3;
}

export function getEtymologyInnerSectionKey(innerSection: EtymologyInnerSection) {
  const key1 = innerSection.antonyms?.[0];
  const key2 = innerSection.definitionSections.length ?? getDefinitionSectionKey(innerSection.definitionSections?.[0]);
  const key3 = innerSection.inflection;
  const key4 = innerSection.partOfSpeech;
  const key5 = innerSection.synonyms?.[0];

  return key1 + key2 + key3 + key4 + key5;
}

export function getDefinitionSectionKey(definitionSection: DefinitionSection) {
  const key1 = definitionSection.antonyms?.[0];
  const key2 = definitionSection.definition;
  const key3 = definitionSection.examples?.[0];
  const key4 = definitionSection.synonyms?.[0];

  return key1 + key2 + key3 + key4;
}

export default DefinitionPanel;

export interface DefinitionPanelProps {
  definition: Definition;
}

export interface DefinitionPanelBaseProps {
  definition: Definition;
  tags: JSX.Element[];
}