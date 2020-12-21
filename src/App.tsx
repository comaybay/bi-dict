import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchBox from "./components/SearchBoxProps";
import LanguageSelectionDropDown from "./components/LanguageSelectionDropDown";
import WhiteButton from "./components/buttons/WhiteButton";
import DefinitionPanelEN from "./components/panels/DefinitionPanelEN"
import DefinitionPanelVN from "./components/panels/DefinitionPanelVN"
import useGetDefinition from "./hooks/useGetDefinition";
import Language from "./types/LanguageType";
import Definition from "./types/Definition";


const App: React.FC = () => {
  const [inputWord, setInputWord] = useState("");
  const [firstLang, setFirstLang] = useState("VN");
  const [secondLang, setSecondLang] = useState("EN");
  const [definitionInFL, fetchDefinitionInFL] = useGetDefinition(firstLang, inputWord, secondLang);
  const [definitionInSL, fetchDefinitionInSL] = useGetDefinition(secondLang, inputWord, secondLang);

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
        <div className="px-2 py-2 grid grid-cols-2 gap-2">
          {definitionInFL && getDefinitionPanelByLanguage(firstLang, definitionInFL)}
          {definitionInSL && getDefinitionPanelByLanguage(secondLang, definitionInSL)}
        </div>
      </div>
    </>
  )
};
export default App;

function getDefinitionPanelByLanguage(language: string, definition: Definition) {
  switch (language as Language) {
    case "EN": return <DefinitionPanelEN definition={definition} />
    case "VN": return <DefinitionPanelVN definition={definition} />
  }
}
