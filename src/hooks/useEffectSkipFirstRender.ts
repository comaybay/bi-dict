import React, { useEffect, useState } from "react";

export default function useEffectSkipFirstRender(effect: React.EffectCallback, deps?: React.DependencyList): void {
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender)
      setIsFirstRender(false);
    else
      return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

