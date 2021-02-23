const monochromeTheme: Theme = {
  background: "bg-gray-300",
  panel: {
    extraLight: "bg-gray-50",
    light: "bg-gray-100",
    sectionDecoration: "bg-gray-300"
  },
  text: {
    dark: "text-gray-700",
    medium: "text-gray-600",
    light: "text-gray-500",
    inputPlaceholder: "placeholder-gray-200",
    focusMedium: "focus:text-gray-600",
  },
  searchForm: {
    background: "bg-gray-50",
    searchBox: {
      background: "bg-gray-50",
    }
  },
  border: {
    light: "border-gray-300",
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
  }
}
export default monochromeTheme;

export interface Theme {
  panel: {
    extraLight: string;
    light: string;
    sectionDecoration: string;
  }
  searchForm: {
    background: string;
    searchBox: {
      background: string;
    }
  }
  text: {
    dark: string;
    medium: string;
    light: string;
    inputPlaceholder: string;
    focusMedium: string;
  }
  background: string;
  border: {
    light: string;
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
}