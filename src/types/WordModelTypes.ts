import Language from "./LanguageType"

export default interface IWordModel {
  language: Language;
  word: string;
  pronunciation: string;
  definitionSections: IDefinitionSection[];
}

interface IDefinitionSection {
  type: string; //example: in English this will be "part-of-speech" type like noun or verb,...
  definitions: Definition[];
}

interface Definition {
  content: string;
  example?: string;
}
