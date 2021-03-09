const monochromeTheme: Theme = {
  body: "bg-gray-300 transition-all duration-75",
  panel: {
    sectionContainer: "bg-gray-50",
    section: "bg-gray-100 rounded-tl-2xl",
    sectionDecoration: "bg-gray-300"
  },
  text: {
    header: "text-gray-700",
    paragraph: "text-gray-600",
    paragraph2: "text-gray-500",
  },
  header: "bg-gray-50",
  searchBox: "bg-gray-50 placeholder-gray-400 border-gray-300 focus:border-indigo-500 text-gray-600",
  suggestion: {
    container: "text-gray-600 hover:bg-gray-100",
    meaning: "text-gray-600 text-sm",
    word: "text-gray-700",
  },
  switch: {
    circle: "bg-white",
    container: "bg-gray-300",
  },
  suggestionBox: "border-gray-300 bg-gray-50 border-gray-300 focus:border-indigo-500",
  dropdownSelection: "border-1.5 bg-gray-50 focus:bg-gray-100 border-gray-300 focus:border-indigo-500 text-gray-600",
  dropdownButtonSVG: "fill-current text-black",
  button: "bg-gray-50 text-gray-600 active:bg-gray-100 border-gray-300 active:border-indigo-500 active:text-indigo-500",
  tag: {
    base: "text-white",
    english: "bg-blue-300",
    vietnamese: "bg-red-300",
    definitionSource: "bg-green-300 ring-inset ring-1 ring-green-100 border-2 border-green-300"
  },
  switchButton: {
    button: "bg-gray-50 border-1.5 border-gray-300 active:bg-gray-100" +
      " active:border-indigo-500",
    svg: "fill-current text-black",
  },
  trailing: {
    definitionSection: "border-gray-400 border-b",
  }
}
export default monochromeTheme;

export const genshinTheme: Theme = {
  body: "bg-genshin-blue-darker transition-all duration-75",
  button: "bg-genshin-yellow-medium border-genshin-blue-dark text-genshin-blue-dark" +
    " active:bg-genshin-blue-dark active:text-genshin-yellow-medium active:border-genshin-yellow-medium",
  dropdownSelection: "border-1.5 bg-genshin-blue-medium border-genshin-blue-dark focus:border-genshin-blue-medium" +
    " focus:bg-genshin-blue-dark text-genshin-yellow-extra-light",
  dropdownButtonSVG: "fill-current text-genshin-yellow-medium",
  panel: {
    sectionContainer: "bg-gradient-to-bl from-genshin-blue-medium to-genshin-blue-dark",
    section: "bg-genshin-blue-dark rounded-xl rounded-tl-2xl rounded-br-2xl",
    sectionDecoration: "bg-genshin-yellow-medium border-2 border-genshin-yellow-extra-light ring-inset ring-2 ring-genshin-blue-dark"
  },
  searchBox: "placeholder-genshin-yellow-light placeholder-opacity-90 text-genshin-yellow-medium bg-genshin-blue-medium border-genshin-blue-dark" +
    " focus:bg-genshin-blue-dark focus:placeholder-opacity-50 focus:border-genshin-blue-medium",
  header: "bg-genshin-blue-dark",
  suggestion: {
    container: "text-genshin-yellow-light hover:bg-genshin-blue-medium",
    meaning: "text-genshin-yellow-light text-sm",
    word: "text-genshin-yellow-medium",
  },
  suggestionBox: "border-genshin-yellow-medium bg-genshin-blue-dark",
  switch: {
    circle: "bg-genshin-blue-dark",
    container: "bg-genshin-blue-medium",
  },
  text: {
    header: "text-genshin-yellow-medium",
    paragraph: "text-gray-300",
    paragraph2: "text-gray-300",
  },
  tag: {
    base: "rounded-full py-1 px-4 text-genshin-blue-darker",
    definitionSource: "bg-genshin-yellow-light ring-inset ring-1 ring-genshin-blue-medium border-2" +
      " rounded-full border-genshin-yellow-medium",
    english: "bg-blue-200",
    vietnamese: "bg-red-200"
  },
  switchButton: {
    button: "bg-genshin-blue-medium border-1.5 border-genshin-blue-dark active:bg-genshin-blue-dark" +
      " active:border-genshin-blue-medium",
    svg: "fill-current text-genshin-yellow-extra-light",
  },
  trailing: {
    definitionSection: "border-genshin-yellow-extra-light border-b border-r rounded-br-full",
  }
}

export interface Theme {
  body: string;
  panel: {
    sectionContainer: string;
    section: string;
    sectionDecoration: string;
  }
  header: string;
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
  }
  dropdownSelection: string;
  button: string;
  switchButton: {
    button: string;
    svg: string;
  };
  tag: {
    base: string;
    vietnamese: string;
    english: string;
    definitionSource: string;
  }
  switch: {
    container: string;
    circle: string;
  }
  dropdownButtonSVG: string;
  trailing: {
    definitionSection: string;
  };
}