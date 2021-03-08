import { useEffect } from "react";

//==https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press
export default function useNoOutlineWhenUsingMouse() {
  useEffect(() => {
    document.documentElement.addEventListener("mousedown", () => {
      document.documentElement.classList.add("using-mouse");
    });

    document.documentElement.addEventListener('keydown', (e) => {
      if (e.key === "Tab")
        document.documentElement.classList.remove("using-mouse");
    });
  }, []);
}