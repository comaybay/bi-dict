import React, { useContext, useEffect, useRef, useState } from "react";
import SearchBoxWithSuggestions from "./SearchBoxWithSuggestions";
import DropdownSelection from "./dropdowns/DropdownSelection";
import Button from "./buttons/Button";
import SwitchButton from "./buttons/SwitchButton"
import LanguageAbbreviation from "../utils/LanguageAbbreviation";
import { AppContext, ThemeContext } from "../App";
import Switch from "../components/switches/Switch";
import Logo from "./Logo"
import anime from "animejs";

const Header: React.FC = () => {
  const { header } = useContext(ThemeContext);
  const [extendedClassName, setExtendedClassName] = useState("hidden");

  const {
    inputWord,
    firstLang,
    setFirstLang,
    secondLang,
    setSecondLang,
    fetchDefinitions,
    switchTheme,
  } = useContext(AppContext);


  const languages = Array.from(LanguageAbbreviation.all());
  const firstLangAbbr = LanguageAbbreviation.fromISOLanguageCode(firstLang);
  const secondLangAbbr = LanguageAbbreviation.fromISOLanguageCode(secondLang);

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
    <div ref={headerRef} className={`flex justify-between items-center fixed z-40 shadow-md w-full pt-1.5 pb-1.5 md:pt-2 md:pb-2.5 ${extendedClassName} ${header}`}>
      <Logo />

      <div className="flex min-w-0 w-full max-w-xs md:max-w-xl lg:max-w-4xl h-7 md:h-11">
        <div className="flex-auto min-w-0"> {/*min-w-0 to give child elems width so they won't grow out of container*/}
          <SearchBoxWithSuggestions />
        </div>

        <DropdownSelection
          currentOption={firstLangAbbr}
          options={languages}
          handleChange={e => {
            const newFirstLang = LanguageAbbreviation.toISOLanguageCode(e.target.value);
            if (secondLang === newFirstLang)
              setSecondLang(firstLang);

            setFirstLang(newFirstLang);
          }}
        />

        <DropdownSelection
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
            handleClick={() => {
              setFirstLang(secondLang);
              setSecondLang(firstLang);
            }}
          />
        </div>

        <div className="pl-2">
          <Button handleClick={() => { fetchDefinitions(inputWord) }} />
        </div>
      </div>

      <div className="mr-3 ml-2">
        <Switch handleClick={switchTheme} />
      </div>
    </div >
  )
}

export default Header
