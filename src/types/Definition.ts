export default interface Definition {
  word: string;
  wordLanguage: string;
  definitionLanguage: string;
  globalPronunciations: string[];
  etymologies: Etymology[];
  sourceName: string;
  sourceLink: string;
}

export interface Etymology {
  origin: string[];
  pronunciations: string[];
  audio: string;
  innerSections: EtymologyInnerSection[];
}

export interface EtymologyInnerSection {
  partOfSpeech: string;
  inflection: string;
  synonyms: string[];
  antonyms: string[];
  senses: Sense[];
}

export interface Sense {
  meaning: string;
  grammaticalNote: string;
  senseRegisters: string;
  region: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  subSenses: Sense[];
}

