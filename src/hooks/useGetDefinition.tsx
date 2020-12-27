import { useEffect, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import Definition from "../types/Definition";

const initialState: DefinitionFetchState = {
  definitionLanguage: "",
  word: "",
  wordLanguage: "",
  isError: false,
  isLoading: false,
}

export default function useGetDefinition(): [DefinitionFetchState, FetchDefinition] {
  const [definitionLanguage, setDefinitionLanguage] = useState("");
  const [word, setWord] = useState("");
  const [wordLanguage, setWordLanguage] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      if (word === "") return;

      dispatch({ type: "FETCH_INIT", payload: { definitionLanguage, word, wordLanguage } });

      const res = await fetch(`https://localhost:44313/api/Definition/${definitionLanguage}/${word}/${wordLanguage}`);
      if (res.ok) {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: await res.json()
        });
      }
      else
        dispatch({ type: "FETCH_FAILURE" });
    })();
  }, [definitionLanguage, word, wordLanguage]);

  const fetchDefinition: FetchDefinition = (definitionLanguage, word, wordLanguage) => {
    setDefinitionLanguage(definitionLanguage);
    setWord(word);
    setWordLanguage(wordLanguage);
  }

  return [state, fetchDefinition];
}

function reducer(state: DefinitionFetchState, action: Action): DefinitionFetchState {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...action.payload,
        isLoading: true,
        isError: false,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        definition: action.payload,
      }
  }
}

interface FetchDefinition {
  (definitionLanguage: string, word: string, wordLanguage: string): void;
}

export interface DefinitionFetchState {
  word: string,
  wordLanguage: string;
  definitionLanguage: string;
  isLoading: boolean;
  isError: boolean;
  definition?: Definition;
}

interface Action {
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";
  payload?: any;
}

