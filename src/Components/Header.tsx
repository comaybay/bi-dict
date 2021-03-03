import React, { useContext, useState } from "react";
import SearchBox from "./SearchBox";
import SuggestionBox from "./SuggestionBox";
import LanguageSelectionDropDown from "./dropdowns/LanguageSelectionDropDown";
import Button from "./buttons/Button";
import LanguageAbbreviation from "../utils/LanguageAbbreviation";
import { AppContext, ThemeContext } from "../App";
import Switch from "../components/switches/Switch";
import useHistory from "../hooks/useHistory";
import useWordSuggestions from "../hooks/useWordSuggestions";
import WordSuggestion from "../types/WordSuggestion";

const HeaderProps: React.FC = () => {
  const {
    inputWord,
    setInputWord,
    firstLang,
    setFirstLang,
    secondLang,
    setSecondLang,
    fetchDefinitions,
    switchTheme,
  } = useContext(AppContext);

  const [searchHistory, addToSearchHistory] = useHistory<WordSuggestion, string>(10);
  let suggestions = useWordSuggestions(inputWord, firstLang, 5);
  suggestions = inputWord === "" ? searchHistory : suggestions;

  const [suggestionBoxEnabled, setSuggestionBoxEnabled] = useState(false);

  const { header, text } = useContext(ThemeContext);
  return (
    <div className={`flex justify-between items-center fixed z-50 shadow-md w-full pt-2 pb-2.5 ${header}`}>
      <div className={`md:text-2xl whitespace-nowrap ml-3 mr-2 font-semibold ${text.header}`}>
        &#66512;Bi&#1418;Dict&#1418;&#10148;
      </div>
      <div className="flex justify-center w-full">
        <div className="flex min-w-0 w-full max-w-4xl ">
          <div className="flex-auto min-w-0"> {/*min-w-0 to give child elems width so they won't grow out of container*/}
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
              </div>
            }
          </div>
          <LanguageSelectionDropDown
            code={firstLang}
            handleChange={e => setFirstLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
          />
          <LanguageSelectionDropDown
            code={secondLang}
            handleChange={e => setSecondLang(LanguageAbbreviation.toISOLanguageCode(e.target.value))}
          />
          <div className="flex pl-2">
            <Button handleClick={() => { fetchDefinitions(inputWord) }} />
          </div>
        </div>
      </div>
      <div className="mr-3 ml-2">
        <Switch handleClick={switchTheme} />
      </div>
    </div>
  )
}

export default HeaderProps
