import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DefinitionPanelEN from "./components/panels/definitionPanels/DefinitionPanelEN"
import DefinitionPanelVN from "./components/panels/definitionPanels/DefinitionPanelVN"
import Definition from "./types/Definition";
import useWordDefinition, { WordDefinitionState } from "./hooks/useWordDefinition";
import DefinitionNotFoundPanel from "./components/panels/definitionPanels/DefinitionNotFoundPanel";
import LoadingPanel from "./components/panels/definitionPanels/LoadingPanel";
import monochromeTheme, { genshinTheme, Theme } from "./utils/Themes";
import useNoOutlineWhenUsingMouse from "./useNoOutlineWhenUsingMouse"
import MinimizeButton from "./components/buttons/MinimizeButton"
import Footer from "./components/Footer"

//==
export const AppContext = React.createContext<AppContextValue>({} as AppContextValue);
export const ThemeContext = React.createContext<Theme>({} as Theme);

const App: React.FC = () => {
  useNoOutlineWhenUsingMouse();
  const [inputWord, setInputWord] = useState("");
  const [firstLang, setFirstLang] = useState("vi");
  const [secondLang, setSecondLang] = useState("en");

  const [stateFL, fetchDefinitionFLtoFL] = useWordDefinition();
  const [stateSL, fetchDefinitionFLtoSL] = useWordDefinition();
  const fetchDefinitions = (word: string) => {
    fetchDefinitionFLtoSL(secondLang, word, firstLang);
    fetchDefinitionFLtoFL(firstLang, word, firstLang);
  };

  const [globalMinimize, setGlobalMinimize] = useState(true);
  const toggleMinimization = () => setGlobalMinimize(globalMinimize => !globalMinimize);

  const [theme, setTheme] = useState(monochromeTheme);
  const switchTheme = () => {
    setTheme(theme === genshinTheme ? monochromeTheme : genshinTheme);
  }

  const providerValue: AppContextValue = {
    inputWord,
    setInputWord,
    firstLang,
    setFirstLang,
    secondLang,
    setSecondLang,
    globalMinimize,
    fetchDefinitions,
    switchTheme,
  }

  useEffect(() => {
    document.body.className = theme.body;
  }, [theme.body]);

  useEffect(() => {
    const switchLanguages = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === " ") {
        setFirstLang(secondLang);
        setSecondLang(firstLang);
        e.preventDefault();
      };
    };
    document.body.addEventListener("keydown", switchLanguages);
    return () => document.body.removeEventListener("keydown", switchLanguages);
  }, [firstLang, secondLang]);

  useEffect(() => {
    const toggleMinimization = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "m" || e.key === "M"))
        setGlobalMinimize(minimize => !minimize);
    }
    document.body.addEventListener("keydown", toggleMinimization);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeContext.Provider value={theme}>
        <div className="z-50 fixed bottom-0 left-0 ml-4 mb-8">
          <MinimizeButton onClick={toggleMinimization} toggle={globalMinimize} />
        </div>

        <AppContext.Provider value={providerValue}>
          <Header />

          <div className="padding-top-navbar">
            <div className="px-2 py-2 grid lg:grid-cols-2 gap-2">
              <div>
                <PanelSection state={stateFL} />
              </div>
              <div>
                <PanelSection state={stateSL} />
              </div>
            </div>
          </div>
        </AppContext.Provider>

        <div className="h-20"></div>

        <div className="mt-auto">
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  )
};
export default App;

const PanelSection: React.FC<{ state: WordDefinitionState }> = ({ state }) => {
  if (state.content)
    return getDefinitionPanelByLanguage(state.content.definitionLanguage, state.content);

  if (state.isLoading)
    return <LoadingPanel language={state.inputs.definitionLanguage} />

  if (state.isError)
    return <DefinitionNotFoundPanel language={state.inputs.definitionLanguage} />

  return <></>;
}

function getDefinitionPanelByLanguage(language: string, definition: Definition) {
  switch (language) {
    case "en": return <DefinitionPanelEN definition={definition} />
    case "vi": return <DefinitionPanelVN definition={definition} />
    default: return <></>
  }
}

interface AppContextValue {
  inputWord: string;
  setInputWord: React.Dispatch<React.SetStateAction<string>>;
  firstLang: string;
  setFirstLang: React.Dispatch<React.SetStateAction<string>>;
  secondLang: string;
  setSecondLang: React.Dispatch<React.SetStateAction<string>>;
  globalMinimize: boolean;
  fetchDefinitions: (word: string) => void;
  switchTheme: () => void;
}