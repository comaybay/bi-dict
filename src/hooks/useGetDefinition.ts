import { useEffect, useReducer, useState } from "react";
import Definition from "../types/Definition";
import FetchState from "../types/FetchState"
import FetchAction from "../types/FetchAction";
import sendRequest from "../utils/sendRequest"

const initialFetchState: FetchState<Definition> = {
  isError: false,
  isLoading: false,
}

export default function useGetDefinition(): [FetchState<Definition>, FetchDefinition] {
  const [definitionLanguage, setDefinitionLanguage] = useState("");
  const [word, setWord] = useState("");
  const [wordLanguage, setWordLanguage] = useState("");
  const [state, dispatch] = useReducer(reducer, initialFetchState);

  useEffect(() => {
    (async () => {
      if (word === "") return;

      dispatch({ type: "FETCH_INIT" });

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

  return [state, fetchDefinition];
}

export type FetchDefinition = (definitionLanguage: string, word: string, wordLanguage: string) => void;

function reducer(state: FetchState<Definition>, action: FetchAction<Definition>): FetchState<Definition> {
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
        content: action.payload,
      }
  }
}