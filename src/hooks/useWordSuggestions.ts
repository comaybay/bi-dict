import { useCallback, useEffect, useState } from "react";
import WordSuggestion from "../types/WordSuggestion";
import sendRequest from "../utils/sendRequest";

//variables used to check changes inside async code
let currentInput = "";
let currentLanguage = "";

export default function useWordSuggestions(initialSuggestionLimit: number): [WordSuggestion[], FetchSuggestions] {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [suggestionLimit, setSuggestionLimit] = useState(initialSuggestionLimit);
  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);

  useEffect(() => {
    (async () => {
      if (input === "") {
        setSuggestions([]);
        return;
      }

      const response = await sendRequest(`WordSuggestions/${input}/${language}`);
      if (!response.ok) {
        setSuggestions([]);
        return;
      }

      //discard suggestions if user already type in something else
      if (currentInput !== input || currentLanguage !== language)
        return;

      const suggestions = await response.json() as WordSuggestion[];
      setSuggestions(suggestions.length <= suggestionLimit ? suggestions : suggestions.slice(0, suggestionLimit));
    })();
  }, [input, language, suggestionLimit]);

  const fetchSuggestions: FetchSuggestions = (input, language, suggestionLimit) => {
    currentInput = input;
    currentLanguage = language;
    setInput(input);
    setLanguage(language);
    if (suggestionLimit !== undefined)
      setSuggestionLimit(suggestionLimit);
  }
  const mFetchSuggestions = useCallback(fetchSuggestions, []);

  return [suggestions, mFetchSuggestions];
}

type FetchSuggestions = (input: string, language: string, suggestionLimit?: number) => void;