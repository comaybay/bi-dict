import { useState } from "react";

type AddToHistory<T, ID> = (item: T, id: ID) => void;
export default function useHistory<T, ID>(): [T[], AddToHistory<T, ID>] {
  const [history, setHistory] = useState<Map<ID, T>>(new Map());

  const add: AddToHistory<T, ID> = (item, id) => setHistory(history => {
    const newHistory = new Map(history)

    if (newHistory.has(id))
      newHistory.delete(id);  //put on top

    newHistory.set(id, item);
    return newHistory;
  })

  const historyAsList = Array.from(history.values()).reverse();
  return [historyAsList, add];
}
