import React from "react";
import Definition, { DefinitionSection, EtymologyInnerSection, EtymologySection } from "../../types/Definition"
import Panel from "./Panel";

export interface DefinitionPanelProps {
  definition: Definition;
}

type TagColor = "red" | "green" | "blue";

export interface DefinitionPanelBaseProps {
  definition: Definition;
  config: {
    languageTag: {
      language: string;
      color: TagColor;
    }
    pronunciation: string;
    etymology: string;
  }
}

const DefinitionPanelBase: React.FC<DefinitionPanelBaseProps> = ({ definition, config }) => {
  const tagColor = getTagColorCss(config.languageTag.color);
  const pronunciationSection = definition.globalPronunciations.map((p) => <div>{p}</div>);

  return (
    <Panel>
      <div className={`float-right mr-2 mt-2 px-2 py-1 rounded-sm text-white ${tagColor}`}>
        <p>{config.languageTag.language}</p>
      </div>
      <div className="text-gray-600 px-5 py-4 relative">
        <div className="text-gray-700 text-2xl font-bold">
          {definition.word}
        </div>
        <div className="text-gray-500 ext-lg italic -mt-1">
          {pronunciationSection}
        </div>
        <div className="pt-2">
          {definition.etymologies.map(etymologySection =>
            <div className="py-2">
              <EtymologySectionBase {...etymologySection} />
            </div>)}
        </div>
      </div>
    </Panel>
  )
}
export default DefinitionPanelBase;

function getTagColorCss(color: TagColor) {
  switch (color) {
    case "red": return "bg-red-300";
    case "green": return "bg-green-300";
    case "blue": return "bg-blue-300";
  }
}

export const EtymologySectionBase: React.FC<EtymologySection> = ({ etymology, innerSections, pronunciations }) => {
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-100 px-3 py-2 rounded-tl-3xl">
        {pronunciations.map(pronunciation =>
          <p>{pronunciation}</p>)}
        <p className="italic font-light">{etymology}</p>
        <div>
          {innerSections.map(innerSection =>
            <EtymologyInnerSectionBase {...innerSection} />)}
        </div>
      </div>
    </div>);
}

export const EtymologyInnerSectionBase: React.FC<EtymologyInnerSection> = ({ antonyms, definitionSections, inflection, partOfSpeech, synonyms }) => {
  return (
    <div className="pl-2">
      <p className="font-bold">{partOfSpeech}</p>
      <p className="pl-2">{inflection}</p>
      <ol className="pl-8">
        {definitionSections.map(ds => <li className="list-decimal"> <DefinitionSectionBase {...ds} /> </li>)}
      </ol>
      <div className="pl-2">
        <div>
          synonyms:
          {synonyms.map(s => <p>{s}</p>)}
        </div>
        <div>
          antonyms:
          {antonyms.map(a => <p>{a}</p>)}
        </div>
      </div>
    </div>
  );
}

export const DefinitionSectionBase: React.FC<DefinitionSection> = ({ antonyms, definition, examples, subDefinitions, synonyms }) => {
  return (
    <>
      <p>{definition}</p>
      <div>
        <ul>
          {examples.map(example =>
            <li className="ml-8 font-light italic list-disc">{example}</li>)}
        </ul>
      </div>
      <div>
        synonyms:
        {synonyms.map(synonym =>
        <p>{synonym}</p>)}
      </div>
      <div>
        antonyms:
        {antonyms.map(antonym =>
        <p>{antonym}</p>)}
      </div>
      <div>
        {subDefinitions.map(sd =>
          <p className="pl-2">
            <DefinitionSectionBase {...sd} />
          </p>)}
      </div>
    </>
  )

}