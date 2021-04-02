import anime from "animejs";
import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../App";

const loadingTextIn: LoadingTextIn = {
  "vi": "Đang tải...",
  "en": "Loading...",
}

const LoadingPanel: React.FC<LoadingPanelProps> = ({ language }) => {
  const { panel, text } = useContext(ThemeContext);

  const panelRef = useRef({} as HTMLDivElement);
  useEffect(() => {
    anime({
      targets: panelRef.current,
      opacity: [1, 0.4],
      duration: 2000,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });

    anime({
      targets: panelRef.current,
      translateY: [-2, 2],
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div ref={panelRef} className={`${panel.sectionContainer} rounded-md p-2`}>
      <div className="grid place-items-center h-full">
        <p className={text.header}>
          {loadingTextIn[language]}
        </p>
      </div>
    </div>
  )
}
export default LoadingPanel;

interface LoadingTextIn {
  [language: string]: string;
}

export interface LoadingPanelProps {
  language: string;
}