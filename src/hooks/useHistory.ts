import { useState } from "react";

export type AddToHistory<T, ID> = (item: T, id: ID) => void;
export default function useHistory<T, ID>(limit: number): [T[], AddToHistory<T, ID>] {
  if (limit < 0)
    throw new RangeError("suggestion limit must be larger than -1");

  const [history, setHistory] = useState<Map<ID, T>>(new Map());

  const add: AddToHistory<T, ID> = (item, id) => setHistory(history => {
    const newHistory = new Map(history)

    if (newHistory.has(id))
      newHistory.delete(id);

    newHistory.set(id, item);

    if (newHistory.size > limit) {
      const keys = newHistory.keys();
      newHistory.delete(keys.next().value);
    }

    return newHistory;
  });

  const historyAsList = Array.from(history.values()).reverse();
  return [historyAsList, add];
}
