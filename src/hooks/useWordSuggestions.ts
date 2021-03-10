import { useEffect, useState } from "react";
import WordSuggestion from "../types/WordSuggestion";
import sendRequest from "../utils/sendRequest";

let currentInput = "";
export default function useWordSuggestions(): [WordSuggestion[], FetchSuggestions] {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [suggestionLimit, setSuggestionLimit] = useState(Infinity);
  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);
  currentInput = input;

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

      //not update suggestions if user already type in something else
      if (currentInput !== input) {
        return;
      }

      const suggestions = await response.json() as WordSuggestion[];
      setSuggestions(suggestions.length <= suggestionLimit ? suggestions : suggestions.slice(0, suggestionLimit));
    })();
  }, [input, language, suggestionLimit]);

  const fetchSuggestions: FetchSuggestions = (input, language, suggestionLimit) => {
    setInput(input);
    setLanguage(language);
    if (suggestionLimit !== undefined)
      setSuggestionLimit(suggestionLimit);
  }

  return [suggestions, fetchSuggestions];
}

type FetchSuggestions = (input: string, language: string, suggestionLimit?: number) => void;