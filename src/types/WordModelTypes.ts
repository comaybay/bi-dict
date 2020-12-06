import Language from "./LanguageType"

export default interface IWordModel {
  language: Language;
  word: string;
  pronunciation: string;
  definitionSections: IDefinitionSection[];
}

export interface IDefinitionSection {
  type: string; //example: in English this will be "part-of-speech" type like noun or verb,...
  definitions: Definition[];
}

export interface Definition {
  content: string;
  example?: string;
}
