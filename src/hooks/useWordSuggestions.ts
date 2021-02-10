import { useEffect, useState } from "react";
import WordSuggestion from "../types/WordSuggestion";
import sendRequest from "../utils/sendRequest";

let currentInput: string = "";

export default function useWordSuggestions(input: string, language: string, maxSuggestions: number = Infinity) {
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
      //user already type in something else
      if (currentInput !== input)
        return;

      const suggestions = await response.json() as WordSuggestion[];
      setSuggestions(suggestions.length <= maxSuggestions ? suggestions : suggestions.slice(0, maxSuggestions));
    })();
  }, [input, language, maxSuggestions]);

  return suggestions;
}
