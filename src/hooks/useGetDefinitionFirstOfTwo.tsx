import Definition from "../types/Definition";
import FetchState from "../types/FetchState";
import useGetDefinition from "./useGetDefinition";

/**
 * Get definition of a word, return first found definition from all given word languages
 * @param defLang  language of definition
 * @param word
 * @param wordLangs languages of word
 */

export default function useGetDefinitionFirstOfTwo(): [FetchState<Definition>, FetchAll] {
  const [state1, fetchDefinition1] = useGetDefinition();
  const [state2, fetchDefinition2] = useGetDefinition();

  const fetchAll: FetchAll = (defLang, word, firstWordLang, secondWordLang) => {
    fetchDefinition1(defLang, word, firstWordLang);
    fetchDefinition2(defLang, word, secondWordLang);
  }

  return [chooseState(state1, state2), fetchAll];
}
type FetchAll = (defLang: string, word: string, firstWordLang: string, secondWordLang: string) => void;

function chooseState(state1: FetchState<Definition>, state2: FetchState<Definition>) {
  if (state1.content)
    return state1;

  if (state2.content)
    return state2;

  if (state1.isLoading)
    return state1;

  if (state2.content)
    return state2;

  return state1;
}
