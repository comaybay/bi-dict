import React, { useState } from "react";
import DefinitionSearchForm from "./components/forms/DefinitionSearchForm";
import DefinitionPanelEN from "./components/panels/definitionPanels/DefinitionPanelEN"
import DefinitionPanelVN from "./components/panels/definitionPanels/DefinitionPanelVN"
import Definition from "./types/Definition";
import FetchState from "./types/FetchState";
import useGetDefinition from "./hooks/useGetDefinition";
import DefinitionNotFoundPanel from "./components/panels/definitionPanels/DefinitionNotFoundPanel";
import LoadingPanel from "./components/panels/definitionPanels/LoadingPanel";

//==
export const AppContext = React.createContext<AppContextValue>({} as AppContextValue);

const App: React.FC = () => {
  const [inputWord, setInputWord] = useState("");
  const [firstLang, setFirstLang] = useState("vi");
  const [secondLang, setSecondLang] = useState("en");

  const [stateFL, fetchDefinitionFLtoFL] = useGetDefinition();
  const [stateSL, fetchDefinitionFLtoSL] = useGetDefinition();

  const fetchDefinitions = (word: string) => {
    fetchDefinitionFLtoSL(secondLang, word, firstLang);
    fetchDefinitionFLtoFL(firstLang, word, firstLang);
  };

  const providerValue: AppContextValue = {
    inputWord,
    setInputWord,
    firstLang,
    setFirstLang,
    secondLang,
    setSecondLang,
    fetchDefinitions
  }

  return (
    <>
      <AppContext.Provider value={providerValue}>
        <DefinitionSearchForm />
      </AppContext.Provider>

      <div className="padding-top-navbar">
        <div className="px-2 py-2 grid grid-cols-2 gap-2">
          <PanelSection fetchState={stateFL} language={firstLang} />
          <PanelSection fetchState={stateSL} language={secondLang} />
        </div>
      </div>
    </>
  )
};
export default App;

const PanelSection: React.FC<PanelSectionProps> = ({ language, fetchState }) => {
  if (fetchState.content)
    return getDefinitionPanelByLanguage(fetchState.content.definitionLanguage, fetchState.content);

  if (fetchState.isLoading)
    return <LoadingPanel language={language} />

  if (fetchState.isError)
    return <DefinitionNotFoundPanel language={language} />

  return <></>;
}

function getDefinitionPanelByLanguage(language: string, definition: Definition) {
  switch (language) {
    case "en": return <DefinitionPanelEN definition={definition} />
    case "vi": return <DefinitionPanelVN definition={definition} />
    default: return <></>
  }
}

interface PanelSectionProps {
  language: string;
  fetchState: FetchState<Definition>;
}

interface AppContextValue {
  inputWord: string;
  setInputWord: React.Dispatch<React.SetStateAction<string>>;
  firstLang: string;
  setFirstLang: React.Dispatch<React.SetStateAction<string>>;
  secondLang: string;
  setSecondLang: React.Dispatch<React.SetStateAction<string>>;
  fetchDefinitions: (word: string) => void;
}