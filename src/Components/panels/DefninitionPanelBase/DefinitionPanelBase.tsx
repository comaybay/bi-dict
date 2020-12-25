import React from "react";
import Definition from "../../../types/Definition"
import { DropDownList } from "../../dropDownList/DropDownList";
import Panel from "../Panel";
import { EtymologySectionBase } from "./EtymologySectionBase";
import { LanguageTag, LanguageTagProps } from "./getTagColorCss";
import { PronunciationsSection } from "./PronunciationsSection";

export interface DefinitionPanelProps {
  definition: Definition;
}

export interface DefinitionPanelBaseProps {
  definition: Definition;
  config: {
    languageTag: LanguageTagProps;
  }
}

const DefinitionPanelBase: React.FC<DefinitionPanelBaseProps> = ({ definition, config }) => {
  return (
    <Panel>
      <LanguageTag {...config.languageTag} />
      <div className="text-gray-600 px-5 py-4 relative">
        <div className="text-gray-700 text-2xl font-bold">
          {definition.word}
        </div>
        {definition.globalPronunciations.length !== 0 &&
          <div className="-mt-1">
            <PronunciationsSection pronunciations={definition.globalPronunciations} />
          </div>
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
export default DefinitionPanelBase;

