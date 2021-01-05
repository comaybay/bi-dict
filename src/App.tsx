import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchBox from "./components/SearchBoxProps";
import LanguageSelectionDropDown from "./components/LanguageSelectionDropDown";
import WhiteButton from "./components/buttons/WhiteButton";
import DefinitionPanelEN from "./components/panels/DefinitionPanelEN"
import DefinitionPanelVN from "./components/panels/DefinitionPanelVN"
import { DefinitionFetchState } from "./hooks/useGetDefinition";
import { useGetDefinitionTwoWay } from "./hooks/useGetDefinitionTwoWay";
import Definition from "./types/Definition";
import { LanguageAbbreviation } from "./utils/LanguageAbbreviation";


const App: React.FC = () => {
  const [inputWord, setInputWord] = useState("");
  const [firstLang, setFirstLang] = useState("vi");
  const [secondLang, setSecondLang] = useState("en");
  const [stateFL, fetchDefinitionInFL] = useGetDefinitionTwoWay();
  const [stateSL, fetchDefinitionInSL] = useGetDefinitionTwoWay();

  return (
    <>
      <div className="shadow-md z-10 fixed w-full">
        <SearchForm
          searchBox={
            <SearchBox
              inputText={inputWord}
              handleChange={e => setInputWord(e.target.value)}
            />}
          languageSelectionDropDown1={
            <LanguageSelectionDropDown
              code={firstLang}
              handleChange={e => setFirstLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
            />}
          languageSelectionDropDown2={
            <LanguageSelectionDropDown
              code={secondLang}
              handleChange={e => setSecondLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
            />}
          searchButton={
            <WhiteButton handleClick={() => {
              fetchDefinitionInFL(firstLang, inputWord, secondLang);
              fetchDefinitionInSL(secondLang, inputWord, firstLang);
            }}
            />}
        />
      </div>
      <div className="padding-top-navbar">
        <div className="px-2 py-2 grid grid-cols-2 gap-2">
          <PanelSection language={stateFL.definitionLanguage} fetchState={stateFL} />
          <PanelSection language={stateSL.definitionLanguage} fetchState={stateSL} />
        </div>
      </div>
    </>
  )
};
export default App;

const PanelSection: React.FC<{ language: string; fetchState: DefinitionFetchState }> = ({ language, fetchState }) => {
  if (fetchState.definition)
    return getDefinitionPanelByLanguage(language, fetchState.definition as Definition);

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


