import anime from "animejs";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../../App";
import Definition, { Sense, EtymologyInnerSection, Etymology } from "../../../../types/Definition"
import { EtymologySectionBase } from "./EtymologySectionBase";
import { PronunciationsSection } from "./PronunciationsSection";

const DefinitionPanel: React.FC<DefinitionPanelBaseProps> = ({ definition, tags }) => {
  const { panel, text } = useContext(ThemeContext);
  const [className, setClassName] = useState("hidden");

  const isEtymologySectionEmpty = (etymology: Etymology): boolean =>
    (etymology.origin.length === 0 && etymology.innerSections.length === 0 && etymology.pronunciations.length === 0);

  const panelRef = useRef({} as HTMLDivElement);
  useEffect(() => {
    const panel = panelRef.current;
    anime({
      begin: () => setClassName(""),
      complete: () => panel.style.cssText = '',
      targets: panel,
      opacity: 0,
      translateY: 20,
      rotateX: -10,
      rotateY: -5,
      direction: 'reverse',
      easing: "easeInQuad",
      duration: 400,
    });
  }, []);

  return (
    <div ref={panelRef} className={`relative rounded-sm ${className} ${panel.sectionContainer}`}>
      <div className="absolute z-10 right-0 flex space-x-2 mt-2 mr-2 items-baseline">
        {tags}
      </div>

      <div className="px-5 py-4 relative text-xs md:text-base">
        <div className={`${text.header} text-sm md:text-2xl font-bold`}>
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
    </div>
  )
}

function getEtymologySectionKey(etymologySection: Etymology): string {
  let key1 = etymologySection.origin?.[0] ?? "";
  let key2 = etymologySection.innerSections.length ? getEtymologyInnerSectionKey(etymologySection.innerSections[0]) : "";
  let key3 = etymologySection.pronunciations?.[0] ?? "";
  return key1 + key2 + key3;
}

export function getEtymologyInnerSectionKey(innerSection: EtymologyInnerSection): string {
  const key1 = innerSection.antonyms?.[0] ?? "";
  const key2 = innerSection.senses.length ? getDefinitionSectionKey(innerSection.senses[0]) : "";
  const key3 = innerSection.inflection;
  const key4 = innerSection.partOfSpeech;
  const key5 = innerSection.synonyms?.[0] ?? "";

  return key1 + key2 + key3 + key4 + key5;
}

export function getDefinitionSectionKey(definitionSection: Sense): string {
  const key1 = definitionSection.antonyms?.[0] ?? "";
  const key2 = definitionSection.meaning;
  const key3 = definitionSection.examples?.[0] ?? "";
  const key4 = definitionSection.synonyms?.[0] ?? "";
  const key5 = definitionSection.subSenses.length ? getDefinitionSectionKey(definitionSection.subSenses[0]) : "";

  return key1 + key2 + key3 + key4 + key5;
}

export default DefinitionPanel;

export interface DefinitionPanelProps {
  definition: Definition;
}

export interface DefinitionPanelBaseProps {
  definition: Definition;
  tags: JSX.Element[];
}