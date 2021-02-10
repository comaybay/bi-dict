import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchBox from "./components/SearchBox";
import LanguageSelectionDropDown from "./components/dropdowns/LanguageSelectionDropDown";
import LanguageSelectionDropDownPurple from "./components/dropdowns/LanguageSelectionDropDownPurple";
import WhiteButton from "./components/buttons/WhiteButton";
import DefinitionPanelEN from "./components/panels/DefinitionPanelEN"
import DefinitionPanelVN from "./components/panels/DefinitionPanelVN"
import Definition from "./types/Definition";
import LanguageAbbreviation from "./utils/LanguageAbbreviation";
import FetchState from "./types/FetchState";
import useWordSuggestions from "./hooks/useWordSuggestions"
import SuggestionBox from "./components/SuggestionBox"
import WordSuggestion from "./types/WordSuggestion";
import useHistory from "./hooks/useHistory"
import useGetDefinition from "./hooks/useGetDefinition";

//==
const App: React.FC = () => {
  const [inputWord, setInputWord] = useState("");
  const [firstLang, setFirstLang] = useState("vi");
  const [secondLang, setSecondLang] = useState("en");

  const [stateFL, fetchDefinitionFLtoFL] = useGetDefinition();
  const [stateSL, fetchDefinitionFLtoSL] = useGetDefinition();

  const [searchHistory, addToSearchHistory] = useHistory<WordSuggestion, string>()
  let suggestions = useWordSuggestions(inputWord, firstLang, 5);
  suggestions = inputWord === "" ? searchHistory : suggestions;

  const fetchDefinitions = (word: string) => {
    fetchDefinitionFLtoSL(secondLang, word, firstLang);
    fetchDefinitionFLtoFL(firstLang, word, firstLang);
  };

  return (
    <>
      <div className="shadow-md z-10 fixed w-full">
        <SearchForm
          searchBox={
            <SearchBox
              inputText={inputWord}
              handleChange={e => setInputWord(e.target.value)}
            />}
          dropDown1={
            <LanguageSelectionDropDownPurple
              code={firstLang}
              handleChange={e => setFirstLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
            />}
          dropDown2={
            <LanguageSelectionDropDown
              code={secondLang}
              handleChange={e => setSecondLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
            />}
          searchButton={
            <WhiteButton handleClick={() => fetchDefinitions(inputWord)}
            />}
          suggestionBox={!suggestions.length ? null :
            <SuggestionBox
              suggestions={suggestions}
              handleClickSuggestion={(elem) => {
                debugger;
                const search = JSON.parse(elem.dataset.wordSuggestion as string) as WordSuggestion;
                addToSearchHistory(search, search.word);
                fetchDefinitions(search.word);
              }}
            />
          }
        />
      </div>
      <div className="padding-top-navbar">
        <div className="px-2 py-2 grid grid-cols-2 gap-2">
          <PanelSection fetchState={stateFL} />
          <PanelSection fetchState={stateSL} />
        </div>
      </div>
    </>
  )
};
export default App;

const PanelSection: React.FC<{ fetchState: FetchState<Definition> }> = ({ fetchState }) => {
  if (fetchState.content)
    return getDefinitionPanelByLanguage(fetchState.content.definitionLanguage, fetchState.content);

  if (fetchState.isLoading)
    return <p>LOADING...</p>

  if (fetchState.isError)
    return <p>ERROR :(</p>

  return <></>;
}

function getDefinitionPanelByLanguage(language: string, definition: Definition) {
  switch (language) {
    case "en": return <DefinitionPanelEN definition={definition} />
    case "vi": return <DefinitionPanelVN definition={definition} />
    default: return <></>
  }
}
