export default interface Definition {
  word: string;
  wordLanguage: string;
  definitionLanguage: string;
  globalPronunciations: string[];
  etymologies: EtymologySection[];
}

export interface EtymologySection {
  etymologyTexts: string[];
  pronunciations: string[];
  innerSections: EtymologyInnerSection[];
}

export interface EtymologyInnerSection {
  partOfSpeech: string;
  inflection: string;
  synonyms: string[];
  antonyms: string[];
  definitionSections: DefinitionSection[];
}

export interface DefinitionSection {
  definition: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  subDefinitions: DefinitionSection[];
}

