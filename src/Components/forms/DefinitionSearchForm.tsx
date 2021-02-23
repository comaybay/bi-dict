import React, { useContext } from "react";
import SearchForm from "./SearchForm";
import SearchBox from "../SearchBox";
import SuggestionBox from "../SuggestionBox";
import LanguageSelectionDropDown from "../dropdowns/LanguageSelectionDropDown";
import Button from "../buttons/Button";
import LanguageAbbreviation from "../../utils/LanguageAbbreviation";
import { AppContext } from "../../App";
import useHistory from "../../hooks/useHistory";
import useWordSuggestions from "../../hooks/useWordSuggestions";
import WordSuggestion from "../../types/WordSuggestion";

const DefinitionSearchForm: React.FC = () => {
  const {
    inputWord,
    setInputWord,
    firstLang,
    setFirstLang,
    secondLang,
    setSecondLang,
    fetchDefinitions
  } = useContext(AppContext);

  const [searchHistory, addToSearchHistory] = useHistory<WordSuggestion, string>(10);
  let suggestions = useWordSuggestions(inputWord, firstLang, 5);
  suggestions = inputWord === "" ? searchHistory : suggestions;

  return (
    <div className="shadow-md z-50 fixed w-full">
      <SearchForm
        searchBox={
          <SearchBox
            inputText={inputWord}
            handleChange={e => setInputWord(e.target.value)}
          />}
        dropDown1={
          <LanguageSelectionDropDown
            code={firstLang}
            handleChange={e => setFirstLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
          />}
        dropDown2={
          <LanguageSelectionDropDown
            code={secondLang}
            handleChange={e => setSecondLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
          />}
        searchButton={
          <Button handleClick={() => { fetchDefinitions(inputWord) }} />}
        suggestionBox={!suggestions.length ? null :
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
        }
      />
    </div>
  )
}

export default DefinitionSearchForm
