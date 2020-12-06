import React from "react";
import IWordModel, { Definition, IDefinitionSection } from "../types/WordModelTypes";

export interface PanelProps {
  wordModel: IWordModel;
}

const Panel: React.FC<PanelProps> = (props) => {
  const { word, pronunciation, definitionSections } = props.wordModel;

  const children = getDefinitionSectionComponents(definitionSections);

  return (
    <div className="bg-gray-50 rounded-md">
      <div className="py-4 px-6">
        <h1 className="text-xl font-bold text-gray-700">{word}</h1>
        <h3 className="italic font-thin text-gray-500">{pronunciation}</h3>
        {children}
      </div>
    </div>
  )
}
export default Panel;

function getDefinitionSectionComponents(definitionSections: IDefinitionSection[]) {
  const res = [];
  for (const { type, definitions } of definitionSections) {
    res.push(
      <div className="pl-2 pt-2">
        <div className="font-bold italic">{type}</div>
        <ol className="pl-6 list-decimal">
          {getDefinitionComponents(definitions)}
        </ol>
      </div>
    )
  }
  return res;
}

function getDefinitionComponents(definitions: Definition[]) {
  const res = [];
  for (const { content, example } of definitions) {
    const exampleComponent = (example) ? (<div className="text-gray-600 text-sm pl-2">{`"${example}"`}</div>) : null;
    res.push(
      <li>
        {content}
        {exampleComponent}
      </li>
    );
  }

  return res;
}