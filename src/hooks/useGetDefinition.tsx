import { useEffect, useReducer, useState } from "react";
import Definition from "../types/Definition";

interface FetchDefinitionFunc {
  (definitionLanguage: string, word: string, wordLanguage: string): void;
}

export default function useGetDefinition(definitionLanguage: string, word: string, wordLanguage: string): [DefinitionFetchState, () => void] {
  const [signal, setSignal] = useState(false);
  const [state, dispatch] = useReducer(reducer, { isLoading: false, isError: false });

  useEffect(() => {
    const fetchDefinition: FetchDefinitionFunc = async (definitionLanguage: string, word: string, wordLanguage: string) => {
      if (word === "") return;

      dispatch({ type: "FETCH_INIT" });

      const res = await fetch(`https://localhost:44313/api/Definition/${definitionLanguage}/${word}/${wordLanguage}`);
      if (res.ok) {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: await res.json()
        });
      }
      else
        dispatch({ type: "FETCH_FAILURE" });
    };

    fetchDefinition(definitionLanguage, word, wordLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signal]);

  const getDefinition = () => setSignal(!signal); //when called, definition will be fetched and set.
  return [state, getDefinition];
}

export interface DefinitionFetchState {
  isLoading: boolean;
  isError: boolean;
  definition?: Definition;
}

interface Action {
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";
  payload?: Definition;
}

function reducer(state: DefinitionFetchState, action: Action): DefinitionFetchState {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        isLoading: true,
        isError: false,
      }
    case "FETCH_FAILURE":
      return {
        isLoading: false,
        isError: true,
      }
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        isError: false,
        definition: action.payload,
      }
  }
}