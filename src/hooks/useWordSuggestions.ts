import { useCallback, useEffect, useState } from "react";
import WordSuggestion from "../types/WordSuggestion";
import sendRequest from "../utils/sendRequest";

export default function useWordSuggestions(initialSuggestionLimit: number): [WordSuggestion[], FetchSuggestions] {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [suggestionLimit, setSuggestionLimit] = useState(initialSuggestionLimit);
  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);

  useEffect(() => {
    let didCancel = false;

    async function fetchWordSuggestions() {
      const response = await sendRequest(`WordSuggestions/${input}/${language}`);
      if (didCancel)
        return;

      if (!response.ok) {
        setSuggestions([]);
        return;
      }

      const suggestions = await response.json() as WordSuggestion[];
      setSuggestions(suggestions.length <= suggestionLimit ? suggestions : suggestions.slice(0, suggestionLimit));
    };

    fetchWordSuggestions();
    return () => { didCancel = true; }
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