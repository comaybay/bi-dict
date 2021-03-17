import { useCallback, useEffect, useReducer, useState } from "react";
import Definition from "../types/Definition";
import FetchState from "../types/FetchState"
import FetchAction from "../types/FetchAction";
import sendRequest from "../utils/sendRequest"

const initialFetchState: WordDefinitionState = {
  isError: false,
  isLoading: false,
  inputs: {
    definitionLanguage: "",
    word: "",
    wordLanguage: "",
  },
}

export default function useWordDefinition(): [WordDefinitionState, FetchDefinition] {
  const [definitionLanguage, setDefinitionLanguage] = useState("");
  const [word, setWord] = useState("");
  const [wordLanguage, setWordLanguage] = useState("");
  const [state, dispatch] = useReducer(reducer, initialFetchState);

  useEffect(() => {
    (async () => {
      if (word === "") return;

      const payload: WordDefinitionInput = { word, wordLanguage, definitionLanguage };
      dispatch({ type: "FETCH_INIT", payload });

      const res = await sendRequest(`Definition/${definitionLanguage}/${word}/${wordLanguage}`);
      if (!res.ok)
        dispatch({ type: "FETCH_FAILURE" });
      else
        dispatch({
          type: "FETCH_SUCCESS",
          payload: await res.json() as Definition
        });
    })();
  }, [definitionLanguage, word, wordLanguage]);

  const fetchDefinition: FetchDefinition = (definitionLanguage, word, wordLanguage) => {
    setDefinitionLanguage(definitionLanguage);
    setWord(word);
    setWordLanguage(wordLanguage);
  }
  const mFetchDefinition = useCallback(fetchDefinition, []);

  return [state, mFetchDefinition];
}

function reducer(state: WordDefinitionState, action: FetchAction<Definition | WordDefinitionInput>): WordDefinitionState {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        inputs: action.payload as WordDefinitionInput,
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
        content: action.payload as Definition,
      }
  }
}

export interface WordDefinitionState extends FetchState<Definition> {
  inputs: WordDefinitionInput;
}

interface WordDefinitionInput {
  definitionLanguage: string,
  word: string,
  wordLanguage: string,
}

export type FetchDefinition = (definitionLanguage: string, word: string, wordLanguage: string) => void;
