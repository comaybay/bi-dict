import { useContext } from "react";
import { ThemeContext } from "../App";
import WordSuggestion from "../types/WordSuggestion"

export interface SuggestionBoxProps {
  suggestions: WordSuggestion[];
  keyboardIndex: number;
  handleClickSuggestion: (suggestionElem: HTMLLIElement) => void;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ suggestions, keyboardIndex, handleClickSuggestion }) => {
  const suggestionElems = suggestions.map((s, index) => {
    if (index === keyboardIndex)
      return <Suggestion key={s.word} suggestion={s} index={index} keyboardHovered={true} />;
    else
      return <Suggestion key={s.word} suggestion={s} index={index} />;
  });

  const { suggestionBox: suggestionBoxTheme } = useContext(ThemeContext);
  return (
    <ul
      className={`shadow-md border-b border-l border-r pb-2 ${suggestionBoxTheme}`}
      onClick={(e) => {
        const target = (e.target as HTMLElement).closest("li");
        if (target)
          handleClickSuggestion(target);
      }}
    >
      {suggestionElems}
    </ul >
  );
}
export default SuggestionBox;

const Suggestion: React.FC<SuggestionProps> = ({ suggestion, index, keyboardHovered = false }) => {
  const { suggestion: suggestionTheme } = useContext(ThemeContext);
  const { word, meaning } = suggestion;
  return (
    <li
      className={`px-3 py-1 truncate ${suggestionTheme.container} ${keyboardHovered && suggestionTheme.keyboardHovered}`}
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
  keyboardHovered?: boolean
}