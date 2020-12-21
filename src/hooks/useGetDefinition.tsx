import { useEffect, useState } from "react";
import Definition from "../types/Definition";

interface FetchDefinitionFunc {
  (definitionLanguage: string, word: string, wordLanguage: string): void;
}
export default function useGetDefinition(definitionLanguage: string, word: string, wordLanguage: string): [(Definition | null), () => void] {
  const [definition, setDefinition] = useState<Definition | null>(null);
  const [signal, setSignal] = useState(false);

  useEffect(() => {
    const fetchDefinition: FetchDefinitionFunc = async (definitionLanguage: string, word: string, wordLanguage: string) => {
      const res = await fetch(`https://localhost:44313/api/Definition/${definitionLanguage}/${word}/${wordLanguage}`);
      setDefinition((res.ok) ? await res.json() as Definition : null);
    };

    fetchDefinition(definitionLanguage, word, wordLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signal]);

  const getDefinition = () => setSignal(!signal); //when called, definition will be fetched and set.
  return [definition, getDefinition];
}
