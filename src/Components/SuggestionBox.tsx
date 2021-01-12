import WordSuggestion from "../types/WordSuggestion"

export interface SuggestionBoxProps {
  suggestions: WordSuggestion[];
  handleClickSuggestion: (suggestionElem: HTMLLIElement) => void;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ suggestions, handleClickSuggestion }) => {
  const suggestionElems = suggestions.map(s => <Suggestion {...s} />)
  return (
    <ul
      className="shadow-md border-b border-l border-r border-gray-300 bg-gray-50 pb-2"
      onClick={(e) => {
        const target = (e.target as HTMLElement).closest("li");
        if (target)
          handleClickSuggestion(target);
        else
          return target;
      }}
    >
      {suggestionElems}
    </ul >
  );
}
export default SuggestionBox;

const Suggestion: React.FC<WordSuggestion> = ({ word, meaning }) => {
  return (
    <li
      className="px-3 py-1 hover:bg-gray-100 whitespace-nowrap overflow-hidden overflow-ellipsis"
      data-word-suggestion={JSON.stringify({ word, meaning } as WordSuggestion)}
    >
      <span>{word}</span>
      " - "
      <span className="text-gray-600 text-sm">{meaning}</span>
    </li>
  )
}