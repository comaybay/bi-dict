import React from "react";
import Definition from "../../../types/Definition"
import Panel from "../Panel";
import { EtymologySectionBase } from "./EtymologySectionBase";
import { LanguageTagProps } from "./languageTags/LanguageTag";
import { PronunciationsSection } from "./PronunciationsSection";

const DefinitionPanel: React.FC<DefinitionPanelBaseProps> = ({ definition, languageTag }) => {
  return (
    <Panel>
      {languageTag}
      <div className="text-gray-600 px-5 py-4 relative">
        <div className="text-gray-700 text-2xl font-bold">
          {definition.word}
        </div>
        {definition.globalPronunciations.length !== 0 &&
          <PronunciationsSection pronunciations={definition.globalPronunciations} />
        }
        <div className="pt-2">
          {definition.etymologies.map(etymologySection =>
            <div className="py-2">
              <EtymologySectionBase {...etymologySection} />
            </div>
          )}
        </div>
      </div>
    </Panel>
  )
}
export default DefinitionPanel;

export interface DefinitionPanelProps {
  definition: Definition;
}

export interface DefinitionPanelBaseProps {
  definition: Definition;
  languageTag: React.FunctionComponentElement<LanguageTagProps>;
}