import React, { useState } from "react";
import Panel from "./components/Panel";
import SearchForm from "./components/SearchForm";
import mockDB from "./tests/mockDB";
import Language from "./types/LanguageType";
import IWordModel from "./types/WordModelTypes";

interface WordModels {
  source: IWordModel | null;
  dest: IWordModel[];
}

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [wordModels, setWordModels] = useState<WordModels>({ source: null, dest: [] });
  const [sourceLang, setSourceLang] = useState<Language>("VN");
  const [destLang, setDestLang] = useState<Language>("EN");

  return (
    <>
      <div className="shadow-md z-0 fixed w-full">
        <SearchForm
          searchBoxInputText={inputText}
          searchBoxHandleChange={(e) => setInputText(e.currentTarget.value)}

          buttonHandleClick={(e) => {
            const sourceWordModel = mockDB.getWordModel(inputText, sourceLang);
            if (!sourceWordModel) return;

            const translations = mockDB.getTranslation(sourceWordModel.word, sourceLang, destLang);
            let destWordModels: IWordModel[] = [];
            for (const word of translations) {
              const wordModel = mockDB.getWordModel(word, destLang);
              if (wordModel) destWordModels.push(wordModel);
            }

            setWordModels({
              source: sourceWordModel,
              dest: destWordModels
            })
          }}
          sourceLangValue={sourceLang}
          sourceLangHandleChange={(e) => setSourceLang(e.currentTarget.value as Language)}
          destLangValue={destLang}
          destLangHandleChange={(e) => setDestLang(e.currentTarget.value as Language)}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 padding-top-navbar px-2">
        {wordModels.source && <PanelContainer wordModels={[wordModels.source]} />}
        {wordModels.dest.length !== 0 && <PanelContainer wordModels={wordModels.dest} />}
      </div>
    </>
  )
}
export default App;

const PanelContainer: React.FC<{ wordModels: IWordModel[] }> = ({ wordModels }) => {
  return (
    <div className="py-2">
      {wordModels.length && wordModels.map(wordModel => <Panel wordModel={wordModel} />)}
    </div>
  )
}

