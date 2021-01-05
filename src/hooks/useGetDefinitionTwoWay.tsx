import useGetDefinition, { DefinitionFetchState } from "./useGetDefinition";

export function useGetDefinitionTwoWay(): [DefinitionFetchState, (defLang: string, word: string, wordLang: string) => void] {
  const [state1, fetchDef1] = useGetDefinition();
  const [state2, fetchDef2] = useGetDefinition();

  /**
   * Get definition of a word, if fails, proceed to get definition of that word in definition language  
   * @param defLang  language of the definition
   * @param word      
   * @param wordLang language of the word
   */
  function fetch(defLang: string, word: string, wordLang: string): void {
    fetchDef1(defLang, word, wordLang);
    fetchDef2(defLang, word, defLang);
  }

  function chooseState(state1: DefinitionFetchState, state2: DefinitionFetchState) {
    if (state1.definition)
      return state1;
    if (state2.definition)
      return state2;

    if (state1.isLoading)
      return state1;
    if (state2.isLoading)
      return state2;

    return state1;
  }

  return [chooseState(state1, state2), fetch];
}
