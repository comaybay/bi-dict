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
    languageDropDown: "text-gray-600",
    searchBox: "text-gray-600",
    button: "text-gray-600",
    tag: "text-white",
  },
  searchForm: "bg-gray-50",
  searchBox: "bg-gray-50 placeholder-gray-200",
  border: {
    color: "border-gray-300",
    focus: "focus:border-indigo-500",
    active: "active:border-indigo-500",
  },
  languageDropDown: {
    background: "bg-gray-50",
    focus: "focus:bg-gray-100"
  },
  button: {
    background: "bg-gray-50",
    active: "active:bg-gray-100"
  },
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
  border: {
    color: "border-genshin-blue-darker",
    focus: "focus:border-genshin-blue-medium",
    active: "active:border-genshin-yellow-medium"
  },
  button: {
    active: "active:bg-genshin-blue-dark active:text-genshin-yellow-medium",
    background: "bg-genshin-yellow-medium"
  },
  languageDropDown: {
    background: "bg-genshin-blue-medium",
    focus: "focus:bg-genshin-blue-dark",
  },
  panel: {
    sectionContainer: "bg-genshin-blue-medium",
    section: "bg-genshin-blue-dark rounded-xl rounded-tl-2xl rounded-br-2xl",
    sectionDecoration: "bg-genshin-yellow-medium border-2 ring-inset ring-2 ring-genshin-blue-dark"
  },
  searchBox: "placeholder-genshin-yellow-light bg-genshin-blue-medium focus:bg-genshin-blue-dark focus:border-genshin-blue-medium text-genshin-yellow-medium",
  searchForm: "bg-genshin-blue-dark",
  text: {
    header: "text-genshin-yellow-medium",
    paragraph: "text-gray-300",
    paragraph2: "text-gray-300",
    searchBox: "text-genshin-yellow-medium",
    languageDropDown: "text-genshin-yellow-extra-light",
    button: "text-genshin-blue-darker",
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
  text: {
    header: string;
    paragraph: string;
    paragraph2: string;
    searchBox: string;
    languageDropDown: string;
    button: string;
    tag: string;
  }
  border: {
    color: string;
    focus: string;
    active: string;
  }
  languageDropDown: {
    background: string;
    focus: string;
  }
  button: {
    background: string;
    active: string;
  }
  tag: {
    base: string;
    vietnamese: string;
    english: string;
    definitionSource: string;
  }
}