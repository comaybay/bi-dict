import { useContext } from "react";
import { ThemeContext } from "../App";
import WordSuggestion from "../types/WordSuggestion"

export interface SuggestionBoxProps {
  suggestions: WordSuggestion[];
  handleClickSuggestion: (suggestionElem: HTMLLIElement) => void;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ suggestions, handleClickSuggestion }) => {
  const suggestionElems = suggestions.map((s, index) => <Suggestion key={s.word} suggestion={s} index={index} />)

  const { suggestionBox: suggestionBoxTheme } = useContext(ThemeContext);
  return (
    <ul
      className={`shadow-md border-b border-l border-r pb-2 ${suggestionBoxTheme}`}
      onClick={(e) => {
        const target = (e.target as HTMLElement).closest("li");
        if (target)
          handleClickSuggestion(target);
        else
          return;
      }}
    >
      {suggestionElems}
    </ul >
  );
}
export default SuggestionBox;

const Suggestion: React.FC<SuggestionProps> = ({ suggestion, index }) => {
  const { suggestion: suggestionTheme } = useContext(ThemeContext);
  const { word, meaning } = suggestion;
  return (
    <li
      className={`px-3 py-1 truncate ${suggestionTheme.container}`}
      data-index={index}
    >
      <span className={suggestionTheme.word}>
        {word}
      </span>
      {meaning &&
        <span className={suggestionTheme.meaning}>
          {` - ${meaning}`}
        </span>
      }
    </li>
  )
}

interface SuggestionProps {
  suggestion: WordSuggestion;
  index: number;
}