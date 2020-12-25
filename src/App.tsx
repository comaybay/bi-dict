import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchBox from "./components/SearchBoxProps";
import LanguageSelectionDropDown from "./components/LanguageSelectionDropDown";
import WhiteButton from "./components/buttons/WhiteButton";
import DefinitionPanelEN from "./components/panels/DefinitionPanelEN"
import DefinitionPanelVN from "./components/panels/DefinitionPanelVN"
import useGetDefinition, { DefinitionFetchState } from "./hooks/useGetDefinition";
import Language from "./types/LanguageType";
import Definition from "./types/Definition";


const App: React.FC = () => {
  const [inputWord, setInputWord] = useState("");
  const [firstLang, setFirstLang] = useState("VN");
  const [secondLang, setSecondLang] = useState("EN");
  const [stateFL, fetchDefinitionInFL] = useGetDefinition(firstLang, inputWord, secondLang);
  const [stateSL, fetchDefinitionInSL] = useGetDefinition(secondLang, inputWord, secondLang);

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
              value={firstLang}
              handleChange={e => setFirstLang(e.target.value)}
            />}
          languageSelectionDropDown2={
            <LanguageSelectionDropDown
              value={secondLang}
              handleChange={e => setSecondLang(e.target.value)}
            />}
          searchButton={
            <WhiteButton handleClick={() => {
              fetchDefinitionInSL();
              fetchDefinitionInFL();
            }}
            />}
        />
      </div>
      <div className="padding-top-navbar">
        <div className="px-2 py-2 grid grid-cols-2 gap-2">{ }
          <PanelSection language={firstLang} fetchState={stateFL} />
          <PanelSection language={secondLang} fetchState={stateSL} />
        </div>
      </div>
    </>
  )
};
export default App;

const PanelSection: React.FC<{ language: string; fetchState: DefinitionFetchState }> = ({ language, fetchState: state }) => {
  if (state.isError)
    return <p>ERROR :(</p>

  if (state.isLoading)
    return <p>LOADING...</p>

  if (state.definition)
    return getDefinitionPanelByLanguage(language, state.definition as Definition);

  return <></>;
}

function getDefinitionPanelByLanguage(language: string, definition: Definition) {
  switch (language as Language) {
    case "EN": return <DefinitionPanelEN definition={definition} />
    case "VN": return <DefinitionPanelVN definition={definition} />
    default: return <></>
  }
}
