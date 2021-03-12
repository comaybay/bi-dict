import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import useHistory from "../hooks/useHistory";
import useWordSuggestions from "../hooks/useWordSuggestions";
import WordSuggestion from "../types/WordSuggestion";
import SearchBox from "./SearchBox";
import SuggestionBox from "./SuggestionBox";

const SearchBoxWithSuggestions: React.FC = () => {
  const { inputWord, setInputWord, firstLang, fetchDefinitions } = useContext(AppContext);

  const [suggestionBoxEnabled, setSuggestionBoxEnabled] = useState(false);
  const [keyboardHoverIndex, setKeyboardHoverIndex] = useState(0);

  const [searchHistory, addToSearchHistory, clearHistory] = useHistory<WordSuggestion, string>(10);
  const [requestedSuggestions, fetchSuggestions] = useWordSuggestions(10);
  const suggestions = inputWord === "" ? searchHistory : requestedSuggestions;

  useEffect(() => clearHistory(),
    [firstLang, clearHistory]);

  useEffect(() => fetchSuggestions(inputWord, firstLang),
    [inputWord, firstLang, fetchSuggestions]);

  return (
    <>
      <SearchBox
        inputText={inputWord}
        handleChange={e => {
          const newInputWord = e.target.value;
          if (!suggestionBoxEnabled && newInputWord !== inputWord)
            setSuggestionBoxEnabled(true);

          setInputWord(newInputWord);
          setKeyboardHoverIndex(-1);
        }}
        handleFocus={() => setSuggestionBoxEnabled(true)}
        handleBlur={() => setSuggestionBoxEnabled(false)}
        handleKeydown={(e) => {
          const size = suggestions.length + 1;
          if (e.key === "ArrowDown")
            setKeyboardHoverIndex((index) => (++index + size) % size);
          else if (e.key === "ArrowUp") {
            setKeyboardHoverIndex((index) => (--index + size) % size);

            //set caret position to be at the end of inputWord instead of at the beginning.
            e.preventDefault();
            e.currentTarget.setSelectionRange(inputWord.length, inputWord.length);
          }
          else if (e.key === "Enter") {
            setSuggestionBoxEnabled(false);

            if (keyboardHoverIndex === -1 || keyboardHoverIndex === size - 1) {
              fetchDefinitions(inputWord);
              return;
            }

            const suggestion = suggestions[keyboardHoverIndex];
            addToSearchHistory(suggestion, suggestion.word);
            setInputWord(suggestion.word);
            fetchDefinitions(suggestion.word);
          }
        }}
      />

      {suggestionBoxEnabled && suggestions.length !== 0 &&
        <div
          className="h-0" /*h-0 to keep everything the same when suggestionBox appear (container's has height = 0 but child is not)*/
          onMouseDown={(e) => e.preventDefault()} /*stop searchBox's blur event (so that suggestionBox onClick handler can be called)*/
        >
          <SuggestionBox
            suggestions={suggestions}
            keyboardIndex={keyboardHoverIndex}
            handleClickSuggestion={(elem) => {
              const index = parseInt(elem.dataset.index as string);
              const suggestion = suggestions[index];
              addToSearchHistory(suggestion, suggestion.word);
              setInputWord(suggestion.word);
              fetchDefinitions(suggestion.word);
              setSuggestionBoxEnabled(false);
            }}
          />
        </div>}
    </>
  )
}
export default SearchBoxWithSuggestions;
