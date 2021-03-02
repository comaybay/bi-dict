const monochromeTheme: Theme = {
  background: "bg-gray-300",
  panel: {
    sectionContainer: "bg-gray-50",
    section: "bg-gray-100 rounded-tl-2xl",
    sectionDecoration: "bg-gray-300"
  },
  text: {
    header: "text-gray-700",
    paragraph: "text-gray-600",
    paragraph2: "text-gray-500",
    searchBox: "text-gray-600",
    tag: "text-white",
  },
  searchForm: "bg-gray-50",
  searchBox: "bg-gray-50 placeholder-gray-200 border-gray-300 focus:border-indigo-500",
  suggestion: {
    container: "hover:bg-gray-100",
    meaning: "text-gray-600 text-sm",
    word: "",
  },
  suggestionBox: "border-gray-300 bg-gray-50 border-gray-300 focus:border-indigo-500",
  languageDropDown: "bg-gray-50 focus:bg-gray-100 border-gray-300 focus:border-indigo-500 text-gray-600",
  button: "bg-gray-50 text-gray-600 active:bg-gray-100 border-gray-300 active:border-indigo-500 active:text-indigo-500",
  tag: {
    base: "",
    english: "bg-blue-300",
    vietnamese: "bg-red-300",
    definitionSource: "bg-green-300 ring-inset ring-1 ring-green-100 border-2 border-green-300"
  }
}
export default monochromeTheme;

export const genshinTheme: Theme = {
  background: "bg-genshin-blue-darker",
  button: "bg-genshin-yellow-medium text-genshin-blue-darker border-genshin-blue-dark" +
    " active:bg-genshin-blue-dark active:text-genshin-yellow-medium active:border-genshin-yellow-medium",
  languageDropDown: "bg-genshin-blue-medium border-genshin-blue-dark focus:border-genshin-blue-medium" +
    " focus:bg-genshin-blue-dark text-genshin-yellow-extra-light",
  panel: {
    sectionContainer: "bg-gradient-to-bl from-genshin-blue-medium to-genshin-blue-dark",
    section: "bg-genshin-blue-dark rounded-xl rounded-tl-2xl rounded-br-2xl",
    sectionDecoration: "bg-genshin-yellow-medium border-2 ring-inset ring-2 ring-genshin-blue-dark"
  },
  searchBox: "placeholder-genshin-yellow-light bg-genshin-blue-medium focus:bg-genshin-blue-dark" +
    " focus:border-genshin-yellow-light text-genshin-yellow-medium border-genshin-blue-dark focus:border-genshin-blue-medium",
  searchForm: "bg-genshin-blue-dark",
  suggestion: {
    container: "hover:bg-genshin-blue-medium",
    meaning: "text-genshin-yellow-light text-sm",
    word: "text-genshin-yellow-medium",
  },
  suggestionBox: "border-genshin-yellow-medium bg-genshin-blue-dark",
  text: {
    header: "text-genshin-yellow-medium",
    paragraph: "text-gray-300",
    paragraph2: "text-gray-300",
    searchBox: "text-genshin-yellow-medium",
    tag: "text-genshin-blue-dark"
  },
  tag: {
    base: "rounded-full py-1 px-4",
    definitionSource: "bg-genshin-yellow-light ring-inset ring-1 ring-genshin-blue-medium border-2" +
      " rounded-full border-genshin-yellow-medium",
    english: "bg-blue-200",
    vietnamese: "bg-red-200"
  }
}

export interface Theme {
  background: string;
  panel: {
    sectionContainer: string;
    section: string;
    sectionDecoration: string;
  }
  searchForm: string;
  searchBox: string;
  suggestion: {
    container: string;
    word: string;
    meaning: string;
  };
  suggestionBox: string;
  text: {
    header: string;
    paragraph: string;
    paragraph2: string;
    searchBox: string;
    tag: string;
  }
  languageDropDown: string;
  button: string;
  tag: {
    base: string;
    vietnamese: string;
    english: string;
    definitionSource: string;
  }
}