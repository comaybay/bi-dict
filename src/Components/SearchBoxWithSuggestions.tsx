import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import useHistory from "../hooks/useHistory";
import useWordSuggestions from "../hooks/useWordSuggestions";
import WordSuggestion from "../types/WordSuggestion";
import SearchBox from "./SearchBox";
import SuggestionBox from "./SuggestionBox";

const SearchBoxWithSuggestions: React.FC = () => {
  const { inputWord, setInputWord, firstLang, fetchDefinitions } = useContext(AppContext);

  const [searchHistory, addToSearchHistory] = useHistory<WordSuggestion, string>(10);
  const requestedSuggestions = useWordSuggestions(inputWord, firstLang, 10);
  const suggestions = inputWord === "" ? searchHistory : requestedSuggestions;

  const [suggestionBoxEnabled, setSuggestionBoxEnabled] = useState(false);
  return (
    <>
      <SearchBox
        inputText={inputWord}
        handleChange={e => setInputWord(e.target.value)}
        handleFocus={() => setSuggestionBoxEnabled(true)}
        handleBlur={() => setSuggestionBoxEnabled(false)}
      />

      {suggestionBoxEnabled && suggestions.length !== 0 &&
        <div
          className="h-0" /*h-0 to keep everything the same when suggestionBox appear (container's has height = 0 but child is not)*/
          onMouseDown={(e) => e.preventDefault()} /*stop searchBox's blur event (so that suggestionBox onClick handler can be called)*/
          onClick={(e) => (document.activeElement as HTMLElement).blur()} /*after suggestionBox's onClick handler is called, hide suggestion box*/
        >
          <SuggestionBox
            suggestions={suggestions}
            handleClickSuggestion={(elem) => {
              const index = +(elem.dataset.index as string);
              const suggestion = suggestions[index];
              addToSearchHistory(suggestion, suggestion.word);
              setInputWord(suggestion.word);
              fetchDefinitions(suggestion.word);
            }}
          />
        </div>}
    </>
  )
}
export default SearchBoxWithSuggestions;