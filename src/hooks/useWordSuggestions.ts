import { useEffect, useState } from "react";
import WordSuggestion from "../types/WordSuggestion";
import sendRequest from "../utils/sendRequest";


export default function useWordSuggestions(input: string, language: string, maxSuggestions: number) {
  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);

  useEffect(() => {
    (async () => {
      if (input === "") {
        setSuggestions([]);
        return
      }

      const response = await sendRequest(`WordSuggestions/${input}/${language}`);
      if (!response.ok) {
        setSuggestions([]);
        return;
      }

      const suggestions = await response.json() as WordSuggestion[];
      setSuggestions(suggestions.length <= maxSuggestions ? suggestions : suggestions.slice(0, maxSuggestions));
    })();
  }, [input, language, maxSuggestions]);

  return suggestions;
}
