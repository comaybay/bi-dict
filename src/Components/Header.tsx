import React, { useContext, useEffect, useRef, useState } from "react";
import SearchBox from "./SearchBox";
import SuggestionBox from "./SuggestionBox";
import DropDownSelection from "./dropdowns/DropDownSelection";
import Button from "./buttons/Button";
import SwitchButton from "./buttons/SwitchButton"
import LanguageAbbreviation from "../utils/LanguageAbbreviation";
import { AppContext, ThemeContext } from "../App";
import Switch from "../components/switches/Switch";
import useHistory from "../hooks/useHistory";
import useWordSuggestions from "../hooks/useWordSuggestions";
import WordSuggestion from "../types/WordSuggestion";
import Logo from "./Logo"
import anime from "animejs";

const HeaderProps: React.FC = () => {
  const { header } = useContext(ThemeContext);
  const [extendedClassName, setExtendedClassName] = useState("hidden");

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
  let suggestions = useWordSuggestions(inputWord, firstLang, 10);
  suggestions = inputWord === "" ? searchHistory : suggestions;

  const [suggestionBoxEnabled, setSuggestionBoxEnabled] = useState(false);
  const languages = Array.from(LanguageAbbreviation.all());
  const firstLangAbbr = LanguageAbbreviation.fromISOLanguageCode(firstLang);
  const secondLangAbbr = LanguageAbbreviation.fromISOLanguageCode(secondLang);

  const switchLanguages = () => {
    setFirstLang(secondLang);
    setSecondLang(firstLang);
  }

  const headerRef = useRef({} as HTMLDivElement);
  useEffect(() => {
    const headerElem = headerRef.current;
    anime({
      targets: headerElem,
      begin: () => setExtendedClassName(""),
      translateY: -100,
      direction: "reverse",
      duration: 500,
      easing: "easeInQuad",
    });
  }, []);

  return (
    <div ref={headerRef} className={`flex justify-between items-center fixed z-50 shadow-md w-full pt-1.5 pb-1.5 md:pt-2 md:pb-2.5 ${extendedClassName} ${header}`}>
      <Logo />
      <div className="flex justify-center w-full">
        <div className="flex min-w-0 w-full max-w-xs md:max-w-xl lg:max-w-4xl h-7 md:h-11">
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

          <DropDownSelection
            currentOption={firstLangAbbr}
            options={languages}
            handleChange={e => {
              const newFirstLang = LanguageAbbreviation.toISOLanguageCode(e.target.value);
              if (secondLang === newFirstLang)
                setSecondLang(firstLang);

              setFirstLang(newFirstLang);
            }}
          />

          <DropDownSelection
            currentOption={secondLangAbbr}
            options={languages}
            handleChange={e => {
              const newSecondLang = LanguageAbbreviation.toISOLanguageCode(e.target.value);
              if (firstLang === newSecondLang)
                setFirstLang(secondLang);

              setSecondLang(newSecondLang);
            }}
          />

          <div className="flex-shrink-0">
            <SwitchButton
              handleClick={switchLanguages}
            />
          </div>

          <div className="pl-2">
            <Button handleClick={() => { fetchDefinitions(inputWord) }} />
          </div>
        </div>
      </div>
      <div className="mr-3 ml-2">
        <Switch handleClick={switchTheme} />
      </div>
    </div >
  )
}

export default HeaderProps
